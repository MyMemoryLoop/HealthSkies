import { MOCK_OH_CLIENTS } from '../../data';

export default function OhClientOnboarding() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Client Pipeline</h1>
                    <p className="text-gray-500 mt-1">Manage B2B deployments and enterprise onboarding stages.</p>
                </div>
                <button className="bg-vc-blue text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:brightness-110 transition-colors">
                    + Register Enterprise
                </button>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-vc-light-grey border-b border-gray-100 text-gray-500 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Corporate Entity</th>
                                <th className="px-6 py-4">Industry</th>
                                <th className="px-6 py-4">ARR Value</th>
                                <th className="px-6 py-4">Implementation Stage</th>
                                <th className="px-6 py-4 text-right">Expected Go-Live</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {MOCK_OH_CLIENTS.map((client) => (
                                <tr key={client.id} className="hover:bg-vc-light-grey transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center font-medium text-vc-dark-navy text-xs border border-gray-200">
                                                {client.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div className="font-medium text-vc-dark-navy">{client.name}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{client.industry}</td>
                                    <td className="px-6 py-4 font-medium text-vc-dark-navy">
                                        ${client.arr.toLocaleString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${client.stage === 'Live' ? 'bg-green-50 text-green-700' :
                                                client.stage === 'Onboarding' ? 'bg-vc-gold-light text-vc-blue' :
                                                    'bg-gray-100 text-gray-600'
                                            }`}>
                                            {client.stage}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-gray-500">
                                        {client.launchDate ? new Date(client.launchDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) : 'TBD'}
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
