import { useState } from 'react';

export default function PlatformSettings() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Infrastructure Controls</h1>
                <p className="text-gray-500 mt-1">Core system toggles, database shards, and master API keys.</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden mb-6">
                <div className="p-4 border-b border-red-200 bg-red-50 flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="font-bold text-red-800">DANGER ZONE</h3>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h4 className="font-bold text-vc-dark-navy">Zero-Downtime Cluster Reboot</h4>
                            <p className="text-sm text-gray-500">Initiates a rolling reboot across all active ECS container nodes.</p>
                        </div>
                        <button className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-4 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm shrink-0">
                            Force Reboot
                        </button>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h4 className="font-bold text-vc-dark-navy">Drop Stale Tenant Schemas</h4>
                            <p className="text-sm text-gray-500">Permanently truncates B2B client data where status === 'Churned'.</p>
                        </div>
                        <button className="bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 px-4 py-2 rounded-lg font-bold shadow-sm transition-colors text-sm shrink-0">
                            Clear DB
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                <h3 className="font-bold text-vc-dark-navy border-b border-gray-100 pb-4">Global Features</h3>
                <InfraToggle name="Auto-Scaling Groups" description="Dynamically spin up AWS nodes when CPU exceeds 75%." defaultEnabled={true} />
                <InfraToggle name="Multi-Region DB Failover" description="Sync Postgres clusters to eu-west-2." defaultEnabled={true} />
                <InfraToggle name="Block Suspicious IPs" description="Enable Web Application Firewall (WAF) rate limiting." defaultEnabled={false} />
            </div>
        </div>
    );
}

function InfraToggle({ name, description, defaultEnabled }: { name: string, description: string, defaultEnabled: boolean }) {
    const [enabled, setEnabled] = useState(defaultEnabled);
    return (
        <div className="flex items-start justify-between gap-4">
            <div>
                <h4 className="font-medium text-vc-dark-navy">{name}</h4>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
            <button
                onClick={() => setEnabled(!enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none shrink-0 mt-1 ${enabled ? 'bg-vc-blue' : 'bg-gray-200'}`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    );
}
