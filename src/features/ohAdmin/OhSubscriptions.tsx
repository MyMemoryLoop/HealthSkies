import { MOCK_OH_CLIENTS } from '../../data';

export default function OhSubscriptions() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy">Subscription Revenue</h1>
                <p className="text-gray-500 mt-1">Financial overview of active enterprise accounts and tier allocations.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                    <p className="text-xs text-gray-500 font-medium">Enterprise Tiers</p>
                    <p className="text-2xl font-bold text-vc-dark-navy mt-1">3</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                    <p className="text-xs text-gray-500 font-medium">Professional Tiers</p>
                    <p className="text-2xl font-bold text-vc-dark-navy mt-1">1</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                    <p className="text-xs text-gray-500 font-medium">Starter Tiers</p>
                    <p className="text-2xl font-bold text-vc-dark-navy mt-1">1</p>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                    <p className="text-xs text-gray-500 font-medium">Total Billable Seats</p>
                    <p className="text-2xl font-bold text-vc-blue mt-1">5,000</p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-6 py-4">Corporate Entity</th>
                            <th className="px-6 py-4">Subscription Plan</th>
                            <th className="px-6 py-4">Seats Allocated</th>
                            <th className="px-6 py-4 text-right">Seat Utilization</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {MOCK_OH_CLIENTS.map((client) => {
                            const utilized = Math.floor(client.employees * (0.6 + Math.random() * 0.3));
                            const percentage = Math.round((utilized / client.employees) * 100);
                            return (
                                <tr key={client.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-vc-dark-navy">{client.name}</td>
                                    <td className="px-6 py-4">
                                        {client.employees > 1000 ? 'Enterprise VIP' : client.employees > 400 ? 'Professional+' : 'Starter Volume'}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-vc-dark-navy">
                                        {client.employees.toLocaleString()} Seats
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-3">
                                            <span className="text-gray-500 text-xs">{percentage}%</span>
                                            <div className="w-24 bg-gray-100 rounded-full h-2">
                                                <div className={`h-2 rounded-full ${percentage > 80 ? 'bg-vc-success' : 'bg-vc-warning'}`} style={{ width: `${percentage}%` }}></div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
