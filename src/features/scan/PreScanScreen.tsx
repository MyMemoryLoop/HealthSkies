interface PreScanScreenProps {
    onStart: () => void;
}

export default function PreScanScreen({ onStart }: PreScanScreenProps) {
    return (
        <div className="flex-1 flex flex-col p-8 items-center text-center justify-center">
            <div className="w-16 h-16 rounded-full bg-vc-blue/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-vc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Digital Health Scan</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
                Position your face within the frame. The scan takes approximately 60 seconds. Ensure good lighting and hold your device steady.
            </p>

            <div className="space-y-4 w-full">
                <button
                    onClick={onStart}
                    className="w-full bg-vc-blue text-white font-bold py-3 rounded-xl hover:brightness-110 transition-colors shadow-lg shadow-vc-blue/20"
                >
                    Begin Scan
                </button>
                <button
                    onClick={onStart}
                    className="w-full bg-white/10 text-white font-medium py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                    Skip to demo results
                </button>
            </div>
        </div>
    );
}
