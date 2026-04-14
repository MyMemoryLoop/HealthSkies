import { MOCK_ORG_EMPLOYEES } from '../../data';

export default function OrgEmployeesPage() {
    return (
        <div className="space-y-6 animate-fade-in">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Employees Directory</h1>
                    <p className="text-gray-500 mt-1">Manage personnel and monitor platform invitations.</p>
                </div>
                <button className="bg-vc-blue text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:brightness-110 transition-colors">
                    + Invite Employee
                </button>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                        <thead className="bg-vc-light-grey border-b border-gray-100 text-gray-500 uppercase text-xs font-semibold">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Department</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Last Scan</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {MOCK_ORG_EMPLOYEES.map((employee) => (
                                <tr key={employee.id} className="hover:bg-vc-light-grey transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-vc-light-grey flex items-center justify-center font-medium text-vc-dark-navy">
                                                {employee.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="font-medium text-vc-dark-navy">{employee.name}</div>
                                                <div className="text-gray-500 text-xs">{employee.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{employee.department}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${employee.status === 'Active' ? 'bg-green-50 text-green-700' :
                                                employee.status === 'Inactive' ? 'bg-gray-100 text-gray-600' :
                                                    'bg-yellow-50 text-yellow-700'
                                            }`}>
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-gray-500">
                                        {employee.lastScanDate ? new Date(employee.lastScanDate).toLocaleDateString() : 'N/A'}
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
