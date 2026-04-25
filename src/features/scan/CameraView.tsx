import { useRef, useEffect, useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';

interface CameraViewProps {
    onFaceDetected: () => void;
}

export default function CameraView({ onFaceDetected }: CameraViewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const modelRef = useRef<blazeface.BlazeFaceModel | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const animationRef = useRef<number | null>(null);
    const faceDetectedRef = useRef(false);

    // AI buffers to decouple 15fps inference from 60fps rendering
    const targetPrediction = useRef<blazeface.NormalizedFace | null>(null);
    const smoothBox = useRef<{ x: number, y: number, w: number, h: number } | null>(null);

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [isModelLoading, setIsModelLoading] = useState(true);
    const [facePresent, setFacePresent] = useState(false);

    // Load model on mount
    useEffect(() => {
        let cancelled = false;
        async function loadModel() {
            try {
                await tf.ready();
                const model = await blazeface.load();
                if (!cancelled) {
                    modelRef.current = model;
                    setIsModelLoading(false);
                }
            } catch (err) {
                console.error('BlazeFace model load failed:', err);
                if (!cancelled) setIsModelLoading(false);
            }
        }
        loadModel();
        return () => { cancelled = true; };
    }, []);

    // Animation Loop (60fps silky smooth rendering)
    const startAnimationLoop = useCallback(() => {
        const renderFrame = () => {
            animationRef.current = requestAnimationFrame(renderFrame);

            const canvas = canvasRef.current;
            const video = videoRef.current;
            if (!canvas || !video || video.readyState < 2) return;

            if (canvas.width !== video.videoWidth) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
            }

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Clear entire canvas perfectly before new paint
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const target = targetPrediction.current;
            if (!target) {
                smoothBox.current = null;
                return;
            }

            const [x1, y1] = target.topLeft as [number, number];
            const [x2, y2] = target.bottomRight as [number, number];
            const tw = x2 - x1;
            const th = y2 - y1;

            // Instantiate or Lerp (Linear Interpolate) for smooth bracket gliding
            if (!smoothBox.current) {
                smoothBox.current = { x: x1, y: y1, w: tw, h: th };
            } else {
                smoothBox.current.x += (x1 - smoothBox.current.x) * 0.15;
                smoothBox.current.y += (y1 - smoothBox.current.y) * 0.15;
                smoothBox.current.w += (tw - smoothBox.current.w) * 0.15;
                smoothBox.current.h += (th - smoothBox.current.h) * 0.15;
            }

            const { x, y, w, h } = smoothBox.current;

            const pad = 20;
            const bx = x - pad;
            const by = y - pad;
            const bw = w + pad * 2;
            const bh = h + pad * 2;
            const bracketLen = Math.min(bw, bh) * 0.22;

            ctx.strokeStyle = 'rgba(79, 195, 247, 0.6)'; // Softer opacity
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';

            const corners: [number, number, number, number, number, number, number, number][] = [
                [bx, by + bracketLen, bx, by, bx + bracketLen, by, bx, by],
                [bx + bw - bracketLen, by, bx + bw, by, bx + bw, by + bracketLen, bx + bw, by],
                [bx, by + bh - bracketLen, bx, by + bh, bx + bracketLen, by + bh, bx, by + bh],
                [bx + bw - bracketLen, by + bh, bx + bw, by + bh, bx + bw, by + bh - bracketLen, bx + bw, by + bh],
            ];

            corners.forEach(([mx, my, cx, cy, ex, ey]) => {
                ctx.beginPath();
                ctx.moveTo(mx, my);
                ctx.lineTo(cx, cy);
                ctx.lineTo(ex, ey);
                ctx.stroke();
            });

            // Slower, smoother Sweeping scan gradient (cycles every 3 seconds)
            const scanProgress = (Date.now() % 3000) / 3000;
            const scanY = by + bh * scanProgress;
            const scanGradient = ctx.createLinearGradient(bx, scanY - 30, bx, scanY + 30);
            scanGradient.addColorStop(0, 'rgba(79, 195, 247, 0)');
            scanGradient.addColorStop(0.5, 'rgba(79, 195, 247, 0.35)'); // Less harsh
            scanGradient.addColorStop(1, 'rgba(79, 195, 247, 0)');
            ctx.fillStyle = scanGradient;
            ctx.fillRect(bx, scanY - 30, bw, 60);

            // Print un-mirrored SCANNING text to counteract css flip
            ctx.save();
            ctx.translate(bx + bw / 2, by + bh + 18);
            ctx.scale(-1, 1);
            ctx.font = 'bold 11px monospace';
            ctx.fillStyle = 'rgba(79, 195, 247, 0.7)';
            ctx.textAlign = 'center';
            ctx.fillText('SCANNING', 0, 0);
            ctx.restore();

        };
        renderFrame();
    }, []);

    // Inference Loop (~15fps minimal battery draw)
    const startInferenceLoop = useCallback(() => {
        intervalRef.current = setInterval(async () => {
            const video = videoRef.current;
            const model = modelRef.current;

            if (!video || !model || video.readyState < 2) return;

            try {
                const predictions = await model.estimateFaces(video, false);
                if (predictions.length > 0) {
                    targetPrediction.current = predictions[0] as blazeface.NormalizedFace;
                    setFacePresent(true);

                    if (!faceDetectedRef.current) {
                        faceDetectedRef.current = true;
                        onFaceDetected();
                    }
                } else {
                    targetPrediction.current = null;
                    setFacePresent(false);
                }
            } catch { }
        }, 66);
    }, [onFaceDetected]);

    // Start camera once model is loaded
    useEffect(() => {
        if (isModelLoading) return;

        let stream: MediaStream | null = null;

        async function setupCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
                });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play().catch(e => console.error(e));
                }
                setHasPermission(true);
                startAnimationLoop();
                startInferenceLoop();
            } catch (err) {
                console.error('Camera error', err);
                setHasPermission(false);
            }
        }

        setupCamera();

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            stream?.getTracks().forEach(track => track.stop());
        };
    }, [isModelLoading, startInferenceLoop, startAnimationLoop]);

    // --- Render ---

    if (hasPermission === false) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center h-[60vh]">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 font-medium">Camera access required</p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    Please enable camera permissions in your browser settings, then reload the page.
                    No video is recorded or transmitted.
                </p>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 w-full h-full bg-vc-dark-navy overflow-hidden">

            {/* Model loading overlay */}
            {isModelLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-vc-dark-navy">
                    <div className="w-8 h-8 rounded-full border-2 border-vc-blue border-t-transparent animate-spin mb-3" />
                    <p className="text-gray-400 text-sm">Initialising scan engine…</p>
                </div>
            )}

            {/* Mirrored camera feed (selfie view) */}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{ transform: 'scaleX(-1)' }}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
            />

            {/* Detection canvas — mirrored to match video */}
            <canvas
                ref={canvasRef}
                style={{ transform: 'scaleX(-1)' }}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Dim oval guide when no face present yet */}
            {!facePresent && !isModelLoading && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-16">
                    <div className="w-56 h-72 border-2 border-dashed border-white/30 rounded-[100px] animate-pulse" />
                    <div className="absolute w-[200%] h-[200%] rounded-full shadow-[0_0_0_9999px_rgba(26,31,54,0.4)]" />
                </div>
            )}

            {/* "Position your face" prompt when no face detected */}
            {!facePresent && !isModelLoading && (
                <div className="absolute bottom-28 inset-x-0 flex justify-center pointer-events-none">
                    <span className="text-xs text-gray-400 bg-black/40 px-3 py-1 rounded-full">
                        Position your face in the frame
                    </span>
                </div>
            )}
        </div>
    );
}
