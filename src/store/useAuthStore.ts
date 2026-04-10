import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, UserRole } from '../types';
import { DEMO_USERS } from '../data';

interface AuthState {
    user: User | null;
    role: UserRole | null;
    isAuthenticated: boolean;
    login: (role: UserRole) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            role: null,
            isAuthenticated: false,
            login: (role) => {
                const user = DEMO_USERS.find(u => u.role === role) || null;
                if (!user) console.warn(`Auth: No user found for role: ${role}`);
                set({ user, role });
            },
            logout: () => set({ user: null, role: null, isAuthenticated: false }),
        }),
        {
            name: 'vida-auth-storage'
        }
    )
);
