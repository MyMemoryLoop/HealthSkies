import type { EnterpriseClient } from '../types';

export const DEMO_CLIENTS: EnterpriseClient[] = [
    {
        id: 'client-1',
        name: 'Acme Corp',
        industry: 'Technology',
        employeeCount: 247,
        plan: 'enterprisePlus',
        status: 'active',
        joinedDate: '2026-01-15',
        avgWellnessScore: 72,
        participationRate: 84,
        scansThisMonth: 156
    },
    {
        id: 'client-2',
        name: 'Meridian Healthcare',
        industry: 'Healthcare',
        employeeCount: 512,
        plan: 'enterprise',
        status: 'active',
        joinedDate: '2025-11-01',
        avgWellnessScore: 68,
        participationRate: 71,
        scansThisMonth: 289
    },
    {
        id: 'client-3',
        name: 'Atlas Financial',
        industry: 'Financial Services',
        employeeCount: 89,
        plan: 'starter',
        status: 'onboarding',
        joinedDate: '2026-03-10',
        avgWellnessScore: null,
        participationRate: 12,
        scansThisMonth: 8
    }
];

export const getClientById = (id: string): EnterpriseClient | undefined =>
    DEMO_CLIENTS.find(c => c.id === id);
