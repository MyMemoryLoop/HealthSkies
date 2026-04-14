import { useAuthStore } from '../store';
import TopNav from './TopNav';
import AdminSidebar from './AdminSidebar';

interface AppShellProps {
    children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
    const { role } = useAuthStore();

    return (
        <div className="flex min-h-screen text-vc-dark-navy flex-col lg:flex-row font-sans">
            {role && <AdminSidebar />}
            <div className="flex-1 flex flex-col min-w-0">
                <TopNav />
                <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                    <div className="mx-auto max-w-7xl w-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
