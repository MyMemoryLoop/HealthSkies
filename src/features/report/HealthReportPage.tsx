import { useState } from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import { useAuthStore } from '../../store';
import { getLatestScanForUser, getHistoryForUser } from '../../data';
import ReportSummary from './ReportSummary';
import HeartHealthTab from './HeartHealthTab';
import MindBodyTab from './MindBodyTab';
import TrendsTab from './TrendsTab';
import RecommendationsTab from './RecommendationsTab';

type Tab = 'Summary' | 'Heart Health' | 'Mind & Body' | 'Trends' | 'Recommendations';

export default function HealthReportPage() {
    const { user } = useAuthStore();
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<Tab>('Summary');
    const history = user ? getHistoryForUser(user.id) : [];
    const scan = id === 'latest'
        ? (user ? getLatestScanForUser(user.id) : null)
        : history.find(s => s.id === id) || (user ? getLatestScanForUser(user.id) : null);

    if (!user || !scan) {
        return <Navigate to="/employee" replace />;
    }

    const tabs: Tab[] = ['Summary', 'Heart Health', 'Mind & Body', 'Trends', 'Recommendations'];

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[calc(100vh-8rem)] flex flex-col animate-fade-in relative z-0">
            <header className="bg-vc-dark-navy text-white p-6 md:p-8 shrink-0">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold">Health Scan Report</h1>
                        <p className="text-gray-300 mt-1 text-sm">Generated {new Date(scan.date).toLocaleDateString()}</p>
                    </div>
                    <Link to="/employee" className="text-gray-300 hover:text-white flex items-center gap-1 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-lg transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back
                    </Link>
                </div>

                {/* Tab Navigation */}
                <div className="-mb-6 md:-mb-8 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 min-w-max pb-2">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab
                                    ? 'bg-vc-light-grey text-vc-dark-navy'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="flex-1 p-4 md:p-8 bg-vc-light-grey overflow-y-auto">
                <div className="max-w-5xl mx-auto h-full">
                    {activeTab === 'Summary' && <ReportSummary user={user} scan={scan} />}
                    {activeTab === 'Heart Health' && <HeartHealthTab metrics={scan.heartHealth} />}
                    {activeTab === 'Mind & Body' && <MindBodyTab metrics={scan.mindBody} />}
                    {activeTab === 'Trends' && <TrendsTab history={history} />}
                    {activeTab === 'Recommendations' && <RecommendationsTab />}
                </div>
            </main>

            <footer className="p-6 bg-white border-t border-gray-100 text-[10px] text-gray-400 text-center leading-relaxed shrink-0">
                Please note that this report is not intended to serve as a medical diagnosis or medical advice. If you have any concerns about your results, it is always best to consult your clinician. Vidacentric and its partners involved do not accept any responsibility for any loss or damage related to this report, nor for any decisions made by individuals based on this report.
            </footer>
        </div>
    );
}
