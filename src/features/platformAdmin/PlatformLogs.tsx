import { MOCK_SYSTEM_LOGS } from '../../data';

export default function PlatformLogs() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-vc-dark-navy font-display">System Logs</h1>
                    <p className="text-gray-500 mt-1">Raw telemetry and infrastructure error traces.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm hover:bg-vc-light-grey text-sm font-medium">Export CSV</button>
                    <button className="px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-lg shadow-sm hover:bg-red-100 text-sm font-medium">Clear Trace</button>
                </div>
            </header>

            <div className="bg-[#0D1117] text-gray-300 rounded-xl shadow-lg border border-gray-800 overflow-hidden font-mono text-xs md:text-sm">
                <div className="p-4 border-b border-gray-800 bg-[#161B22] flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 overflow-x-auto space-y-2">
                    {MOCK_SYSTEM_LOGS.map((log, i) => (
                        <div key={i} className="flex gap-4 hover:bg-white/5 p-1 rounded transition-colors group whitespace-nowrap">
                            <span className="text-gray-500 shrink-0">{new Date(log.timestamp).toISOString()}</span>
                            <span className={`shrink-0 w-12 font-bold ${log.level === 'ERROR' ? 'text-red-400' :
                                    log.level === 'WARN' ? 'text-yellow-400' :
                                        'text-green-400'
                                }`}>
                                [{log.level}]
                            </span>
                            <span className="text-vc-mid-navy shrink-0 w-32">{log.service}</span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">{log.message}</span>
                        </div>
                    ))}
                    <div className="animate-pulse flex items-center gap-2 mt-4 text-green-500">
                        <span className="font-bold">_</span> Awaiting stream...
                    </div>
                </div>
            </div>
        </div>
    );
}
