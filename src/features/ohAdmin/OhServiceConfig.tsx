import { useState } from 'react';
import { MOCK_OH_CLIENTS } from '../../data';

export default function OhServiceConfig() {
    const [selectedClient, setSelectedClient] = useState(MOCK_OH_CLIENTS[0].id);

    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Feature Configurations</h1>
                <p className="text-gray-500 mt-1">Enable or disable premium micro-services and capabilities per organization.</p>
            </header>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-64 shrink-0">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-4 border-b border-gray-100 bg-gray-50">
                            <h3 className="font-semibold text-vc-dark-navy text-sm">Select Client</h3>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {MOCK_OH_CLIENTS.map(client => (
                                <button
                                    key={client.id}
                                    onClick={() => setSelectedClient(client.id)}
                                    className={`w-full text-left p-4 text-sm font-medium transition-colors ${selectedClient === client.id ? 'bg-vc-gold-light text-vc-blue border-l-4 border-vc-blue' : 'text-gray-600 hover:bg-vc-light-grey'
                                        }`}
                                >
                                    {client.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                    <ServiceToggle name="Telehealth Video Calling" description="Enables WebRTC patient-doctor video streams." defaultEnabled={true} />
                    <ServiceToggle name="AI Nutritional Analysis" description="Unlocks computer vision food tracking API." defaultEnabled={true} />
                    <ServiceToggle name="Mental Health SOS Line" description="24/7 priority routing to psychiatric professionals." defaultEnabled={false} badge="Premium" />
                    <ServiceToggle name="Advanced BI Dashboards" description="Allows Org Admins to download raw CSV data lakes." defaultEnabled={true} />
                </div>
            </div>
        </div>
    );
}

function ServiceToggle({ name, description, defaultEnabled, badge }: { name: string, description: string, defaultEnabled: boolean, badge?: string }) {
    const [enabled, setEnabled] = useState(defaultEnabled);
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-start justify-between gap-4">
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-vc-dark-navy">{name}</h3>
                    {badge && <span className="bg-yellow-100 text-yellow-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded">{badge}</span>}
                </div>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <button
                onClick={() => setEnabled(!enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none shrink-0 ${enabled ? 'bg-vc-success' : 'bg-gray-200'}`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    );
}
