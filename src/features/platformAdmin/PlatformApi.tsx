import { MOCK_API_TELEMETRY } from '../../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PlatformApi() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">API Traffic Diagnostics</h1>
                <p className="text-gray-500 mt-1">Real-time edge gateway metrics, latency tracking, and request volumes.</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="font-bold text-vc-dark-navy text-lg mb-6">Gateway Latency Curve (ms)</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={MOCK_API_TELEMETRY}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'monospace' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'monospace' }} dx={-10} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', fontFamily: 'monospace', fontSize: '12px' }}
                                itemStyle={{ color: '#F59E0B', fontWeight: 600 }}
                            />
                            <Line type="monotone" dataKey="latency" name="Latency (ms)" stroke="#F59E0B" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-vc-dark-navy text-lg mb-6">Total Packets / RPS</h3>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={MOCK_API_TELEMETRY}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'monospace' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'monospace' }} dx={-10} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', fontFamily: 'monospace', fontSize: '12px' }}
                                itemStyle={{ color: '#0F172A', fontWeight: 600 }}
                            />
                            <Line type="stepAfter" dataKey="rps" name="Requests/Sec" stroke="#0F172A" strokeWidth={2} dot={false} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
