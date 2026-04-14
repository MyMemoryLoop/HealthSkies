import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_ORG_ANALYTICS } from '../../data';
import { StatCard } from '../../components';

export default function OrgAnalyticsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Platform Analytics</h1>
                <p className="text-gray-500 mt-1">Deep dive into health telemetry and active participation across the organization.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <StatCard
                    title="YTD Total Scans"
                    value="755"
                    trend={{ value: 12, label: '% vs previous quarter' }}
                    colorClass="text-vc-dark-navy"
                />
                <StatCard
                    title="Average Monthly Actives"
                    value="62"
                    trend={{ value: 4, label: 'MoM' }}
                    colorClass="text-vc-blue"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-vc-dark-navy text-lg mb-6">Historical Scan Volume</h3>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={MOCK_ORG_ANALYTICS}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#EDE9E0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dx={-10} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                itemStyle={{ color: '#C8972E', fontWeight: 600 }}
                            />
                            <Line type="monotone" dataKey="scansCompleted" name="Total Scans" stroke="#C8972E" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            <Line type="monotone" dataKey="activeUsers" name="Active Users" stroke="#22C55E" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
