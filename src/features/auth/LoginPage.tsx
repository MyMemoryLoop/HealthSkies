import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VidaCentricLogo } from '../../components';
import { useAuthStore } from '../../store';
import type { UserRole } from '../../types';

export default function LoginPage() {
    const { login, isAuthenticated, role } = useAuthStore();
    const navigate = useNavigate();
    const [roleSelection, setRoleSelection] = useState<UserRole>('employee');
    const [toastMessage, setToastMessage] = useState<string | null>(null);

    useEffect(() => {
        if (isAuthenticated && role) {
            switch (role) {
                case 'employee': navigate('/employee'); break;
                case 'orgAdmin': navigate('/org-admin'); break;
                case 'ohAdmin': navigate('/oh-admin'); break;
                case 'platformAdmin': navigate('/platform-admin'); break;
            }
        }
    }, [isAuthenticated, role, navigate]);

    const roleEmails: Record<UserRole, string> = {
        employee: 'james.wilson@acmecorp.com',
        orgAdmin: 'sarah.mitchell@acmecorp.com',
        ohAdmin: 'karen@healthyskies.com',
        platformAdmin: 'paul@healthyskies.com'
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(roleSelection);
    };

    const handleForgotPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setToastMessage('Reset email sent — check your inbox');
        setTimeout(() => setToastMessage(null), 3000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-vc-light-grey p-4">
            {toastMessage && (
                <div className="fixed top-4 bg-vc-blue text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fade-in">
                    {toastMessage}
                </div>
            )}
            <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <div className="flex flex-col items-center mb-8">
                    <VidaCentricLogo className="scale-125 mb-4" />
                    <h1 className="text-xl font-medium text-vc-dark-navy">Healthy Skies</h1>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sign in as (Demo Role)</label>
                        <select
                            value={roleSelection}
                            onChange={(e) => setRoleSelection(e.target.value as UserRole)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vc-blue focus:border-vc-blue outline-none transition-colors"
                        >
                            <option value="employee">Employee</option>
                            <option value="orgAdmin">Organisation Admin (HR)</option>
                            <option value="ohAdmin">Healthy Skies Admin</option>
                            <option value="platformAdmin">Healthy Skies Admin</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            readOnly
                            value={roleEmails[roleSelection]}
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password (Optional Demo)</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-vc-blue focus:border-vc-blue outline-none transition-colors"
                        />
                    </div>

                    <div className="text-right">
                        <a href="#" onClick={handleForgotPassword} className="text-sm text-vc-blue hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-vc-blue text-white font-medium py-2.5 rounded-lg hover:brightness-110 transition-colors shadow-sm"
                    >
                        Sign In
                    </button>

                    <div className="relative mt-6 pt-4 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-2.5 rounded-lg hover:bg-vc-light-grey transition-colors shadow-sm flex items-center justify-center gap-2"
                        >
                            <svg viewBox="0 0 21 21" className="w-5 h-5">
                                <path d="M10 0L0 0 0 10 10 10 10 0Z" fill="#f35325" />
                                <path d="M21 0L11 0 11 10 21 10 21 0Z" fill="#81bc06" />
                                <path d="M10 11L0 11 0 21 10 21 10 11Z" fill="#05a6f0" />
                                <path d="M21 11L11 11 11 21 21 21 21 11Z" fill="#ffba08" />
                            </svg>
                            Sign in with Microsoft SSO
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
