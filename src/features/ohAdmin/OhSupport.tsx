import { MOCK_OH_TICKETS } from '../../data';

export default function OhSupport() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy">B2B Support Desk</h1>
                <p className="text-gray-500 mt-1">Manage integration tickets and corporate SLA requests.</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Ticket ID</th>
                                <th className="px-6 py-4">Corporate Entity</th>
                                <th className="px-6 py-4">Subject Requirement</th>
                                <th className="px-6 py-4">Priority SLA</th>
                                <th className="px-6 py-4">Queue Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {MOCK_OH_TICKETS.map((ticket) => (
                                <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-gray-500">{ticket.id}</td>
                                    <td className="px-6 py-4 font-medium text-vc-dark-navy">{ticket.client}</td>
                                    <td className="px-6 py-4 text-gray-600">{ticket.subject}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase ${ticket.priority === 'High' ? 'text-red-700 bg-red-50' :
                                                ticket.priority === 'Medium' ? 'text-yellow-700 bg-yellow-50' :
                                                    'text-vc-blue bg-blue-50'
                                            }`}>
                                            {ticket.priority}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full ${ticket.status === 'Open' ? 'bg-red-500' :
                                                    ticket.status === 'In Progress' ? 'bg-yellow-500' :
                                                        'bg-green-500'
                                                }`}></span>
                                            <span className="font-medium text-vc-dark-navy">{ticket.status}</span>
                                        </div>
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
