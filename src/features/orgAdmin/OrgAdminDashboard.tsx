import { StatCard } from '../../components';
import { MOCK_ORG_ANALYTICS, MOCK_ORG_EMPLOYEES, MOCK_ORG_DEPARTMENTS } from '../../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function OrgAdminDashboard() {
    const activeEmployees = MOCK_ORG_EMPLOYEES.filter(e => e.status === 'Active').length;
    const avgScore = MOCK_ORG_ANALYTICS[MOCK_ORG_ANALYTICS.length - 1].avgScore;

    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Organisation Dashboard</h1>
                <p className="text-gray-500 mt-1">Enterprise wellness tracking and employee adoption overview.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    title="Total Licensed Seats"
                    value="150"
                    trend={{ value: 0, label: 'Seats Filled' }}
                    colorClass="text-vc-dark-navy"
                />
                <StatCard
                    title="Active Employees"
                    value={activeEmployees}
                    trend={{ value: 24, label: '% this month', isPositiveGood: true }}
                    colorClass="text-vc-blue"
                />
                <StatCard
                    title="Average Wellness Score"
                    value={avgScore}
                    trend={{ value: 3, label: 'pts', isPositiveGood: true }}
                    colorClass="text-vc-success"
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-vc-dark-navy text-lg mb-6">Engagement Velocity</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={MOCK_ORG_ANALYTICS}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E5E5" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} dx={-10} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    itemStyle={{ color: '#00843D', fontWeight: 600 }}
                                />
                                <Line type="monotone" dataKey="scansCompleted" name="Scans" stroke="#00843D" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-vc-dark-navy text-lg mb-6">Department Participation</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={MOCK_ORG_DEPARTMENTS} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E5E5" />
                                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 12, fontWeight: 500 }} width={100} />
                                <Tooltip
                                    cursor={{ fill: '#F5F5F5' }}
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    formatter={(value: any) => [`${value}%`, 'Participation']}
                                />
                                <Bar dataKey="participation" fill="#22C55E" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
