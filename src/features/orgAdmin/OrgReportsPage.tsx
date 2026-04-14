export default function OrgReportsPage() {
    const reports = [
        { id: 1, title: 'Q1 2026 Corporate Wellness Summary', date: 'April 02, 2026', size: '2.4 MB' },
        { id: 2, title: 'March 2026 Engagement Report', date: 'April 01, 2026', size: '1.1 MB' },
        { id: 3, title: 'February 2026 Engagement Report', date: 'March 01, 2026', size: '1.2 MB' },
        { id: 4, title: 'January 2026 Engagement Report', date: 'February 01, 2026', size: '1.0 MB' },
        { id: 5, title: 'Q4 2025 Corporate Wellness Summary', date: 'January 05, 2026', size: '3.1 MB' },
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Corporate Reports</h1>
                <p className="text-gray-500 mt-1">Download monthly and quarterly aggregated demographic health insights.</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {reports.map(report => (
                        <div key={report.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-vc-light-grey transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-medium text-vc-dark-navy">{report.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">Generated {report.date} • PDF ({report.size})</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 text-sm font-medium text-vc-blue border border-vc-blue rounded-lg hover:bg-vc-gold-light transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
