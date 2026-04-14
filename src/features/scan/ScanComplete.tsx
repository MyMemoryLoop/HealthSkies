interface ScanCompleteProps {
    onViewReport: () => void;
}

export default function ScanComplete({ onViewReport }: ScanCompleteProps) {
    return (
        <div className="absolute inset-0 z-30 bg-vc-dark-navy flex flex-col items-center justify-center p-8 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-vc-success/20 flex items-center justify-center mb-6 animate-pulse">
                <div className="w-14 h-14 rounded-full bg-vc-success flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Scan Complete!</h2>
            <p className="text-gray-300 mb-8 max-w-[240px]">
                Your health metrics have been analyzed and your results are ready.
            </p>

            <button
                onClick={onViewReport}
                className="w-full max-w-xs bg-vc-blue text-white font-bold py-3.5 rounded-xl hover:brightness-110 transition-colors shadow-lg shadow-vc-blue/20"
            >
                View Report
            </button>
        </div>
    );
}
