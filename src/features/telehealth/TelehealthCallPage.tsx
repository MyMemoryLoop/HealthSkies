import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TelehealthCallPage() {
    const navigate = useNavigate();
    const [status, setStatus] = useState<'waiting' | 'connected' | 'ended'>('waiting');
    const [isVideoMuted, setIsVideoMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStatus('connected');
            setupCamera();
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    async function setupCamera() {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: true });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (err) {
            console.error('Telehealth camera access denied or missing:', err);
        }
    }

    const toggleVideo = () => {
        if (stream) {
            const videoTrack = stream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVideoMuted(!videoTrack.enabled);
            }
        }
    };

    const endCall = () => {
        setStatus('ended');
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        setTimeout(() => navigate('/employee/telehealth'), 1500);
    };

    return (
        <div className="fixed inset-0 z-50 bg-gray-900 text-white flex flex-col animate-fade-in font-sans">
            <div className="flex-1 relative bg-gray-900 border-b border-gray-800">
                {status === 'waiting' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in">
                        <div className="w-16 h-16 rounded-full border-4 border-vc-blue border-t-transparent animate-spin mb-4"></div>
                        <p className="font-medium text-lg text-white">Waiting for Dr. Sarah Ahmed to join...</p>
                    </div>
                )}
                {status === 'connected' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center animate-fade-in">
                        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center border-4 border-gray-700 shadow-2xl">
                            <svg className="w-24 h-24 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                        </div>
                        <p className="text-gray-400 font-medium mt-6 tracking-wide uppercase text-sm">Encrypted Connection</p>
                    </div>
                )}
                {status === 'ended' && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 animate-fade-in">
                        <p className="font-bold text-2xl text-vc-success bg-white px-8 py-4 rounded-2xl shadow-xl">Call Ended</p>
                    </div>
                )}

                {status === 'connected' && (
                    <div className="absolute top-4 right-4 w-32 h-48 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-2xl flex items-center justify-center animate-fade-in transition-all">
                        {!isVideoMuted ? (
                            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover transform -scale-x-100" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-900">
                                <svg className="w-12 h-12 text-gray-600 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="h-24 bg-gray-900 flex items-center justify-center gap-6 px-8 shrink-0 relative z-20">
                <button className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </button>
                <button onClick={toggleVideo} className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-colors ${isVideoMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-800 hover:bg-gray-700'}`}>
                    {isVideoMuted ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            <line x1="3" y1="3" x2="21" y2="21" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}
                </button>
                <button onClick={endCall} className="w-16 h-14 rounded-full bg-[#f35325] flex items-center justify-center text-white hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all transform hover:scale-105">
                    <svg className="w-6 h-6 transform rotate-[135deg]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                </button>
            </div>
        </div>
    );
}
