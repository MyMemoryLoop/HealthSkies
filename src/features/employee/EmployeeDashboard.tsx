import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { ScoreGauge, StatCard } from '../../components';
import { getLatestScanForUser, getAppointmentsForUser } from '@/data';

export default function EmployeeDashboard() {
    const { user } = useAuthStore();
    const latestScan = user ? getLatestScanForUser(user.id) : null;
    const upcomingConfig = user ? getAppointmentsForUser(user.id).filter(a => a.status === 'upcoming') : [];

    const firstName = user?.name.split(' ')[0] || 'User';

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good morning';
        if (hour < 18) return 'Good afternoon';
        return 'Good evening';
    };

    return (
        <div className="space-y-6 animate-fade-in">
            <header>
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">{getGreeting()}, {firstName}</h1>
                <p className="text-gray-500 mt-1">Insurance ID Number 4585856958</p>
            </header>

            {/* Wellness Score Section */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-lg font-bold text-vc-dark-navy mb-2">Your Wellness Score</h2>
                    <p className="text-sm text-gray-500 mb-4 max-w-sm">
                        Based on your latest digital health scan. We recommend scanning every 2 weeks to keep your score accurate.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-sm">
                        <span className="flex items-center gap-1 text-vc-success font-medium bg-green-50 px-2 py-1 rounded">
                            ↑ 3 points
                        </span>
                        <span className="text-gray-400">Since last scan</span>
                    </div>
                </div>
                <div className="shrink-0 scale-110">
                    <ScoreGauge score={latestScan?.vidaScore || 0} size="md" />
                </div>
            </section>

            {/* Overview Grid */}
            <section>
                <h2 className="text-lg font-bold text-vc-dark-navy mb-4">Health Overview</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        title="Heart Health"
                        value="82"
                        colorClass="text-vc-success"
                        trend={{ value: 2 }}
                    />
                    <StatCard
                        title="Stress Level"
                        value="64"
                        colorClass="text-vc-warning"
                        trend={{ value: -5, isPositiveGood: false }}
                        icon={
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                    />
                    <StatCard
                        title="Physical Activity"
                        value="71"
                        colorClass="text-vc-success"
                        trend={{ value: 4 }}
                    />
                    <StatCard
                        title="Fatigue"
                        value="45"
                        colorClass="text-vc-danger"
                        trend={{ value: 12, isPositiveGood: false }}
                    />
                </div>
            </section>

            {/* Quick Actions */}
            <section>
                <h2 className="text-lg font-bold text-vc-dark-navy mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/employee/scan" className="bg-vc-dark-navy text-white rounded-xl p-5 hover:opacity-90 transition-opacity group flex flex-col h-full">
                        <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg">Health Scan</h3>
                        <p className="text-white/70 text-sm mt-1">Takes about 60 seconds</p>
                    </Link>

                    <Link to="/employee/report/latest" className="bg-white border border-gray-200 text-vc-dark-navy rounded-xl p-5 hover:bg-vc-light-grey transition-colors group flex flex-col h-full">
                        <div className="bg-gray-100 text-vc-blue w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg">My Reports</h3>
                        <p className="text-gray-500 text-sm mt-1">View detailed metric breakdowns</p>
                    </Link>

                    <Link to="/employee/telehealth" className="bg-white border border-gray-200 text-vc-dark-navy rounded-xl p-5 hover:bg-vc-light-grey transition-colors group flex flex-col h-full">
                        <div className="bg-gray-100 text-vc-blue w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="font-semibold text-lg">Telehealth</h3>
                        <p className="text-gray-500 text-sm mt-1">Consult with a healthcare pro</p>
                    </Link>
                </div>
            </section>

            {/* Recent Activity Mini-feed */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h2 className="text-lg font-bold text-vc-dark-navy mb-4">Recent Activity</h2>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm">
                        <span className="w-8 h-8 rounded-full bg-vc-light-grey flex items-center justify-center text-vc-blue shrink-0">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                        <div className="flex-1">
                            <p className="font-medium text-vc-dark-navy">Health Scan completed</p>
                            <p className="text-gray-500">9 April 2026</p>
                        </div>
                    </li>
                    {upcomingConfig.length > 0 && (
                        <li className="flex items-center gap-3 text-sm">
                            <span className="w-8 h-8 rounded-full bg-vc-gold-light flex items-center justify-center text-vc-blue shrink-0">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </span>
                            <div className="flex-1">
                                <p className="font-medium text-vc-dark-navy">Next Telehealth: {upcomingConfig[0].doctorName}</p>
                                <p className="text-gray-500">15 April 2026 at {upcomingConfig[0].time}</p>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    );
}
