import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { getHistoryForUser } from '@/data';
import { ScoreGauge } from '../../components';

export default function ScanHistoryPage() {
    const { user } = useAuthStore();
    const history = user ? getHistoryForUser(user.id) : [];

    return (
        <div className="space-y-6 animate-fade-in max-w-5xl mx-auto">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Scan History</h1>
                <p className="text-gray-500 mt-1">Review your past digital health assessments</p>
            </header>

            <div className="grid gap-4">
                {history.map(scan => (
                    <Link
                        key={scan.id}
                        to={`/employee/report/${scan.id}`}
                        className="block bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6 hover:shadow-md transition-shadow group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="shrink-0">
                                    <ScoreGauge score={scan.vidaScore} size="sm" animated={false} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-vc-dark-navy group-hover:text-vc-blue transition-colors">
                                        Health Scan Report
                                    </h3>
                                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            {new Date(scan.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}
                                        </span>
                                        <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium text-xs">Completed</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center text-vc-blue font-medium text-sm gap-1 self-end md:self-center">
                                View Details
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
