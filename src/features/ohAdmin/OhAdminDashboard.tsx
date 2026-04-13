import { StatCard } from '../../components';
import { MOCK_OH_ANALYTICS, MOCK_OH_CLIENTS } from '../../data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function OhAdminDashboard() {
    const liveClients = MOCK_OH_CLIENTS.filter(c => c.stage === 'Live').length;
    const totalArr = MOCK_OH_CLIENTS.filter(c => c.stage === 'Live' || c.stage === 'Onboarding').reduce((sum, c) => sum + c.arr, 0);

    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy">One Healthcare Platform Admin</h1>
                <p className="text-gray-500 mt-1">Global vendor telemetry, active deployments, and ARR trajectory.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="Active Deployments"
                    value={liveClients}
                    trend={{ value: 2, label: 'new this month', isPositiveGood: true }}
                    colorClass="text-vc-dark-navy"
                />
                <StatCard
                    title="Live User Base"
                    value="4,250"
                    trend={{ value: 15, label: '% growth YoY', isPositiveGood: true }}
                    colorClass="text-vc-success"
                />
                <StatCard
                    title="Total Contracted ARR"
                    value={`$${(totalArr / 1000000).toFixed(2)}M`}
                    trend={{ value: 5.4, label: '% QoQ', isPositiveGood: true }}
                    colorClass="text-vc-blue"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                <h3 className="font-bold text-vc-dark-navy text-lg mb-6">Global Scan Trajectory</h3>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={MOCK_OH_ANALYTICS}>
                            <defs>
                                <linearGradient id="colorScans" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4169E1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#4169E1" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dx={-10} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                itemStyle={{ color: '#4169E1', fontWeight: 600 }}
                            />
                            <Area type="monotone" dataKey="globalScans" name="Global Server Scans" stroke="#4169E1" strokeWidth={3} fillOpacity={1} fill="url(#colorScans)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
