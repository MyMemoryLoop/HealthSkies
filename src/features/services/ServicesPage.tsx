import { useState } from 'react';
import { SERVICES } from '@/data';
import type { Service } from '../../types';

export default function ServicesPage() {
    const [category, setCategory] = useState<'all' | 'nutrition' | 'fitness' | 'mental-health' | 'screening' | 'general' | 'cardiology'>('all');

    const filtered = category === 'all' ? SERVICES : SERVICES.filter(s => s.category === category);

    return (
        <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Health Services</h1>
                <p className="text-gray-500 mt-1">Explore wellness and medical services provided by your organization</p>
            </header>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {[
                    { id: 'all', label: 'All Services' },
                    { id: 'nutrition', label: 'Nutrition & Diet' },
                    { id: 'fitness', label: 'Physical Fitness' },
                    { id: 'mental-health', label: 'Mental Health' },
                    { id: 'screening', label: 'Screening & Diagnostics' },
                ].map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id as any)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${category === cat.id
                            ? 'bg-vc-dark-navy text-white shadow-sm'
                            : 'bg-white border border-gray-200 text-gray-600 hover:bg-vc-light-grey'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
                {filtered.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-xl border border-gray-100 border-dashed">
                        No services found for this category.
                    </div>
                )}
            </div>
        </div>
    );
}

function ServiceCard({ service }: { service: Service }) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
                <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-vc-dark-navy uppercase tracking-wide">
                    {service.category.replace('-', ' ')}
                </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-vc-dark-navy line-clamp-1">{service.name}</h3>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">{service.description}</p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="text-sm">
                        <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider">Provider</span>
                        <span className="font-medium text-vc-dark-navy">{service.provider}</span>
                    </div>
                    <button className="bg-vc-light-grey text-vc-blue font-medium px-4 py-2 rounded-lg hover:bg-vc-blue hover:text-white transition-colors text-sm">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
