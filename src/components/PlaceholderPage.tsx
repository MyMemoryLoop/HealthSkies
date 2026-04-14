import { useLocation } from 'react-router-dom';
import { StatCard } from './StatCard';

export default function PlaceholderPage() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const moduleName = pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Dashboard';
    const title = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

    const mockData = [
        { id: 1, name: 'Core System API', status: 'Operational', usage: '98%' },
        { id: 2, name: 'Billing Gateway', status: 'Operational', usage: '45%' },
        { id: 3, name: 'User Directory', status: 'Syncing', usage: '12%' },
        { id: 4, name: 'Diagnostic Engine', status: 'Operational', usage: '89%' },
        { id: 5, name: 'Reporting Service', status: 'Maintenance', usage: '0%' },
    ];

    return (
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto w-full animate-fade-in">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy capitalize">{title} Module</h1>
                <p className="text-gray-500 mt-2">Manage settings, data entries, and sub-systems for {title}.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title={`Total ${title} Records`} value="1,248" trend={{ value: 12, label: '% this week' }} />
                <StatCard title="Active Sessions" value="84" trend={{ value: 0, label: ' (Stable)' }} />
                <StatCard title="System Health" value="99.9%" trend={{ value: 0.1, label: '% (Optimal)' }} />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h2 className="font-semibold text-vc-dark-navy">{title} Data Overview</h2>
                    <button className="px-4 py-2 bg-vc-blue text-white text-sm font-medium rounded-lg hover:brightness-110 transition shadow-sm">
                        + Create New
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left whitespace-nowrap">
                        <thead className="bg-vc-light-grey">
                            <tr>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Entity Name</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockData.map((row) => (
                                <tr key={row.id} className="hover:bg-vc-light-grey transition-colors">
                                    <td className="px-6 py-4 text-sm text-gray-500">#{row.id}00</td>
                                    <td className="px-6 py-4 text-sm font-medium text-vc-dark-navy">{row.name}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${row.status === 'Operational' ? 'bg-green-50 text-green-700 border-green-200' :
                                            row.status === 'Syncing' ? 'bg-vc-gold-light text-vc-blue border-vc-blue/30' : 'bg-orange-50 text-orange-700 border-orange-200'
                                            }`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm min-w-[200px]">
                                        <div className="w-full bg-vc-light-grey rounded-full h-1.5 mt-2 overflow-hidden">
                                            <div className="bg-vc-blue h-1.5 rounded-full" style={{ width: row.usage }}></div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-vc-blue font-medium cursor-pointer hover:underline">
                                        Edit
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500 bg-gray-50/50">
                    <span>Showing 1 to 5 of 1,248 entries</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-vc-light-grey transition-colors">Previous</button>
                        <button className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-vc-light-grey transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
