import { StatCard } from '../../components';
import { MOCK_API_TELEMETRY, MOCK_TENANTS } from '../../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PlatformAdminDashboard() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Healthy Skies Platform Admin</h1>
                <p className="text-gray-500 mt-1">Root access telemetry, multi-tenant global monitoring, and active API loads.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    title="Global API Uptime"
                    value="99.99%"
                    trend={{ value: 0.01, label: '% vs last week', isPositiveGood: true }}
                    colorClass="text-vc-success"
                />
                <StatCard
                    title="Active Root Tenants"
                    value={MOCK_TENANTS.length}
                    trend={{ value: 0, label: 'Unchanged' }}
                    colorClass="text-vc-dark-navy"
                />
                <StatCard
                    title="Avg Core Load"
                    value="42%"
                    trend={{ value: 12, label: '% spike', isPositiveGood: false }}
                    colorClass="text-vc-warning"
                />
                <StatCard
                    title="Active Cluster Nodes"
                    value="92"
                    trend={{ value: 2, label: 'scaled up today', isPositiveGood: true }}
                    colorClass="text-vc-blue"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-vc-dark-navy text-lg">Firehose Requests per Second (RPS)</h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        LIVE
                    </div>
                </div>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={MOCK_API_TELEMETRY}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'monospace' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontFamily: 'monospace' }} dx={-10} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', fontFamily: 'monospace', fontSize: '12px' }}
                                itemStyle={{ color: '#0F172A', fontWeight: 600 }}
                            />
                            <Line type="stepAfter" dataKey="rps" name="Requests/Sec" stroke="#0F172A" strokeWidth={2} dot={false} activeDot={{ r: 6, fill: '#0F172A' }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
