import { useRef, useEffect, useState } from 'react';

interface CameraViewProps {
    onFaceDetected: () => void;
}

export default function CameraView({ onFaceDetected }: CameraViewProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        let stream: MediaStream | null = null;

        async function setupCamera() {
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play().catch(e => console.error(e));
                }
                setHasPermission(true);
                setTimeout(onFaceDetected, 1500);
            } catch (err) {
                console.error('Camera error', err);
                setHasPermission(false);
            }
        }
        setupCamera();

        return () => {
            if (stream) stream.getTracks().forEach(track => track.stop());
        };
    }, [onFaceDetected]);

    if (hasPermission === false) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center h-[60vh]">
                <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 font-medium">Camera access is required for the health scan.</p>
                <p className="text-gray-400 text-sm mt-2">Please enable camera permissions in your browser settings to continue.</p>
            </div>
        );
    }

    return (
        <div className="relative w-full flex-1 aspect-[3/4] bg-vc-dark-navy overflow-hidden">
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover opacity-90 scale-105" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-16">
                <div className="w-56 h-72 border-4 border-dashed border-white/40 rounded-[100px] animate-pulse relative z-10"></div>
                <div className="absolute w-[200%] h-[200%] rounded-full shadow-[0_0_0_9999px_rgba(26,31,54,0.4)] pointer-events-none"></div>
            </div>
        </div>
    );
}
