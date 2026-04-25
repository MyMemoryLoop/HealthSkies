import { useEffect } from 'react';
import { useScanStore } from '../../store';

interface ScanProgressProps {
    onComplete: () => void;
    faceConfirmed?: boolean;
}

export default function ScanProgress({ onComplete, faceConfirmed = false }: ScanProgressProps) {
    const { progress, setProgress } = useScanStore();

    useEffect(() => {
        let current = 0;
        const interval = setInterval(() => {
            current += 6.66;
            if (current >= 100) {
                setProgress(100);
                clearInterval(interval);
                setTimeout(onComplete, 1000);
            } else {
                setProgress(Math.floor(current));
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [setProgress, onComplete]);

    return (
        <div className="absolute inset-x-0 bottom-0 p-8 z-20">
            <div className="mb-4">
                <div className="flex justify-between text-sm font-medium mb-2">
                    <span>Analyzing...</span>
                    <span>{progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                    <div
                        className="bg-vc-blue h-2.5 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                    <StatusIcon done={faceConfirmed} active={!faceConfirmed} />
                    <span className={faceConfirmed ? 'text-white' : 'text-gray-400'}>Face detected</span>
                </div>
                <div className="flex items-center gap-3">
                    <StatusIcon done={progress >= 30} active={progress >= 10 && progress < 30} />
                    <span className={progress >= 30 ? 'text-white' : 'text-gray-400'}>Reading vital signs</span>
                </div>
                <div className="flex items-center gap-3">
                    <StatusIcon done={progress >= 60} active={progress >= 30 && progress < 60} />
                    <span className={progress >= 60 ? 'text-white' : 'text-gray-400'}>Analyzing health metrics</span>
                </div>
                <div className="flex items-center gap-3">
                    <StatusIcon done={progress >= 80} active={progress >= 60 && progress < 80} />
                    <span className={progress >= 80 ? 'text-white' : 'text-gray-400'}>Generating Wellness Score</span>
                </div>
            </div>
        </div>
    );
}

function StatusIcon({ done, active }: { done: boolean, active: boolean }) {
    if (done) {
        return (
            <div className="w-5 h-5 rounded-full bg-vc-success flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
        );
    }
    if (active) {
        return (
            <div className="w-5 h-5 rounded-full border-2 border-vc-blue flex items-center justify-center shrink-0 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-vc-blue"></div>
            </div>
        );
    }
    return <div className="w-5 h-5 rounded-full border-2 border-gray-600 shrink-0"></div>;
}
