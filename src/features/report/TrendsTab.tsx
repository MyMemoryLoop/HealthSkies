import type { ScanResult } from '../../types';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

export default function TrendsTab({ history }: { history: ScanResult[] }) {
    const sortedHistory = [...history].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    const chartData = sortedHistory.map(scan => ({
        date: new Date(scan.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        score: scan.vidaScore,
        hrv: scan.heartHealth.find(m => m.name === 'Heart Rate Variability')?.value || 0,
        stress: scan.mindBody.find(m => m.name === 'Stress Level')?.value || 0
    }));

    return (
        <div className="space-y-6 animate-fade-in pb-8">
            <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-vc-dark-navy">Historical Trends</h2>
                    <p className="text-sm text-gray-500">Track your progress over time</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-vc-dark-navy mb-6">Wellness Score History</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                            <YAxis domain={[0, 100]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dx={-10} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="score"
                                stroke="#05a6f0"
                                strokeWidth={3}
                                activeDot={{ r: 6, fill: '#05a6f0', stroke: '#fff', strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-vc-dark-navy mb-6">Stress level vs HRV</h3>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dx={-10} />
                            <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                            <Line type="monotone" dataKey="stress" name="Stress Level" stroke="#f35325" strokeWidth={2} />
                            <Line type="monotone" dataKey="hrv" name="HRV (ms)" stroke="#81bc06" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
