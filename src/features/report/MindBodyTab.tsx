import type { HealthMetric } from '../../types';
import { MetricCard } from '../../components';

export default function MindBodyTab({ metrics }: { metrics: HealthMetric[] }) {
    return (
        <div className="space-y-6 animate-fade-in pb-8">
            <div className="flex items-center gap-3 mb-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-vc-gold-light text-vc-blue flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-vc-dark-navy">Mind & Body</h2>
                    <p className="text-sm text-gray-500">9 holistic wellbeing indicators</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map(m => (
                    <MetricCard key={m.name} metric={m} />
                ))}
            </div>
        </div>
    );
}
