import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../store';
import { VidaCentricLogo } from '../components';

export default function AdminSidebar() {
    const { role, user, logout } = useAuthStore();

    // The Employee role is inherently mobile-first, and usually doesn't have a big desktop sidebar 
    // but to prevent it snapping wildly we only render sidebars for admins according to the spec: "Desktop sidebar for admin roles"
    if (role === 'employee' || !role) return null;

    const getLinks = () => {
        switch (role) {
            case 'orgAdmin':
                return [
                    { name: 'Dashboard', path: '/org-admin' },
                    { name: 'Employees', path: '/org-admin/employees' },
                    { name: 'Analytics', path: '/org-admin/analytics' },
                    { name: 'Reports', path: '/org-admin/reports' },
                    { name: 'Settings', path: '/org-admin/settings' },
                ];
            case 'ohAdmin':
                return [
                    { name: 'Dashboard', path: '/oh-admin' },
                    { name: 'Client Onboarding', path: '/oh-admin/onboarding' },
                    { name: 'Subscriptions', path: '/oh-admin/subscriptions' },
                    { name: 'Service Config', path: '/oh-admin/services' },
                    { name: 'Support', path: '/oh-admin/support' },
                ];
            case 'platformAdmin':
                return [
                    { name: 'Dashboard', path: '/platform-admin' },
                    { name: 'Client Management', path: '/platform-admin/clients' },
                    { name: 'Partner Config', path: '/platform-admin/partners' },
                    { name: 'Subscription Plans', path: '/platform-admin/plans' },
                    { name: 'Platform Analytics', path: '/platform-admin/analytics' },
                    { name: 'System Logs', path: '/platform-admin/logs' },
                    { name: 'Settings', path: '/platform-admin/settings' },
                ];
            default: return [];
        }
    };

    return (
        <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-hidden shrink-0">
            <div className="p-6 border-b border-gray-200 shrink-0">
                <VidaCentricLogo />
                {user && (
                    <div className="mt-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-vc-light-grey flex items-center justify-center font-medium text-vc-dark-navy">
                            {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="font-medium text-sm text-vc-dark-navy truncate">{user.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{role}</p>
                        </div>
                    </div>
                )}
            </div>
            <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
                {getLinks().map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium text-sm transition-colors ${isActive ? 'bg-vc-blue text-white shadow-sm' : 'text-vc-dark-navy hover:bg-vc-light-grey'
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-200 shrink-0">
                <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-vc-danger font-medium hover:bg-red-50 rounded-lg transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
