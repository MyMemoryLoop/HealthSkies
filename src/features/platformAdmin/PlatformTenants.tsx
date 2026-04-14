import { MOCK_TENANTS } from '../../data';

export default function PlatformTenants() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Root Tenant Clusters</h1>
                    <p className="text-gray-500 mt-1">Manage top-level Master Vendors (e.g. Healthy Skies) deploying Healthy Skies codebases.</p>
                </div>
                <button className="bg-vc-dark-navy text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-slate-800 transition-colors border border-slate-700">
                    Propagate Patch
                </button>
            </header>

            <div className="bg-white text-slate-800 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-slate-100 border-b border-gray-200 text-slate-600 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Tenant Identifier</th>
                                <th className="px-6 py-4">AWS Region</th>
                                <th className="px-6 py-4">Active ECS Instances</th>
                                <th className="px-6 py-4">Engine Version</th>
                                <th className="px-6 py-4">Health Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {MOCK_TENANTS.map((tenant) => (
                                <tr key={tenant.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-vc-dark-navy">{tenant.name}</div>
                                        <div className="text-xs text-slate-500 font-mono mt-0.5">{tenant.id}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-mono text-xs">{tenant.region}</td>
                                    <td className="px-6 py-4 text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                            </svg>
                                            {tenant.instances} Nodes
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-xs text-slate-500">{tenant.version}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase ${tenant.status === 'Healthy' ? 'text-green-700 bg-green-100 border border-green-200' : 'text-red-700 bg-red-100 border border-red-200'
                                            }`}>
                                            {tenant.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
