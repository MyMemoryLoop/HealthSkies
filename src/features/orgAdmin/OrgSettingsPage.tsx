import { MOCK_ORG_INVOICES } from '../../data';

export default function OrgSettingsPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Organisation Settings</h1>
                <p className="text-gray-500 mt-1">Manage billing, licensing, and corporate details.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-vc-dark-navy mb-4 border-b border-gray-100 pb-2">Company Profile</h3>
                        <div className="space-y-3 text-sm">
                            <div><span className="block text-gray-400 text-xs">Company Name</span><span className="font-medium text-vc-dark-navy">Acme Corp Ltd</span></div>
                            <div><span className="block text-gray-400 text-xs">Primary Contact</span><span className="font-medium text-vc-dark-navy">Jane HR Director</span></div>
                            <div><span className="block text-gray-400 text-xs">Email Contact</span><span className="font-medium text-vc-dark-navy">billing@acmecorp.com</span></div>
                            <div><span className="block text-gray-400 text-xs">Address</span><span className="font-medium text-vc-dark-navy">123 Business Parkway, Enterprise City, 90210</span></div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-vc-dark-navy mb-4 border-b border-gray-100 pb-2">Active License Subscription</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700">Enterprise Tier</span>
                                <span className="bg-green-50 text-green-700 text-xs font-bold px-2 py-1 rounded">ACTIVE</span>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                    <span>Seats Used</span>
                                    <span>84 / 150</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className="bg-vc-blue h-2 rounded-full" style={{ width: '56%' }}></div>
                                </div>
                            </div>
                            <button className="w-full text-center text-sm font-medium text-vc-blue py-2 border border-vc-blue rounded-lg hover:bg-vc-gold-light transition-colors mt-2">
                                Request Seat Increase
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h3 className="font-bold text-vc-dark-navy">Billing & Invoices</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead className="bg-vc-light-grey border-b border-gray-100 text-gray-500 uppercase text-xs font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Invoice #</th>
                                        <th className="px-6 py-4">Cycle</th>
                                        <th className="px-6 py-4 text-right">Amount</th>
                                        <th className="px-6 py-4">Status</th>
                                        <th className="px-6 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {MOCK_ORG_INVOICES.map((inv) => (
                                        <tr key={inv.id} className="hover:bg-vc-light-grey transition-colors">
                                            <td className="px-6 py-4 font-medium text-vc-dark-navy">{inv.id}</td>
                                            <td className="px-6 py-4 text-gray-600">{inv.billingCycle}</td>
                                            <td className="px-6 py-4 text-right font-medium">${inv.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${inv.status === 'Paid' ? 'bg-green-50 text-green-700' :
                                                        inv.status === 'Pending' ? 'bg-yellow-50 text-yellow-700' :
                                                            'bg-red-50 text-red-700'
                                                    }`}>
                                                    {inv.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-vc-blue hover:underline text-sm font-medium">View PDF</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
