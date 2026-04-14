export default function RecommendationsTab() {
    return (
        <div className="space-y-6 animate-fade-in pb-8">
            <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-vc-dark-navy">Recommendations</h2>
                    <p className="text-sm text-gray-500">Personalized actions based on your scan</p>
                </div>
            </div>

            <div className="grid gap-4">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-vc-gold-light text-vc-blue shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-vc-dark-navy mb-1 text-lg">Increase deep breathing exercises</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">Your Stress Index is slightly elevated. 5 minutes of box breathing daily can significantly lower cortisol levels and improve HRV.</p>
                        <button className="text-sm font-medium text-vc-blue flex items-center gap-1 group">
                            View guided exercises <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 shrink-0 flex items-center justify-center mt-1">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-vc-dark-navy mb-1 text-lg">Maintain sleep consistency</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-3">Your fatigue score showed a 12% improvement. Maintaining your current circadian rhythm is proving highly effective.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
