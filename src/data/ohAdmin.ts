export interface OhClient {
    id: string;
    name: string;
    industry: string;
    stage: 'Prospect' | 'Onboarding' | 'Live' | 'Churned';
    arr: number;
    employees: number;
    launchDate: string | null;
}

export interface OhTicket {
    id: string;
    client: string;
    subject: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In Progress' | 'Resolved';
    date: string;
}

export const MOCK_OH_CLIENTS: OhClient[] = [
    { id: 'C-101', name: 'Acme Corp Ltd', industry: 'Manufacturing', stage: 'Live', arr: 150000, employees: 450, launchDate: '2025-06-01' },
    { id: 'C-102', name: 'Stark Industries', industry: 'Defense', stage: 'Onboarding', arr: 420000, employees: 1200, launchDate: '2026-05-15' },
    { id: 'C-103', name: 'Wayne Enterprises', industry: 'Technology', stage: 'Live', arr: 850000, employees: 3000, launchDate: '2024-11-20' },
    { id: 'C-104', name: 'Globex Corp', industry: 'Energy', stage: 'Prospect', arr: 75000, employees: 200, launchDate: null },
    { id: 'C-105', name: 'Initech', industry: 'Software', stage: 'Live', arr: 50000, employees: 150, launchDate: '2025-01-10' },
];

export const MOCK_OH_TICKETS: OhTicket[] = [
    { id: 'TKT-9042', client: 'Stark Industries', subject: 'SSO SAML Integration Failure', priority: 'High', status: 'Open', date: '2026-04-13' },
    { id: 'TKT-9041', client: 'Acme Corp Ltd', subject: 'Requesting Seat Expansion (150 -> 200)', priority: 'Medium', status: 'In Progress', date: '2026-04-12' },
    { id: 'TKT-9038', client: 'Initech', subject: 'Custom Branding Assets Missing', priority: 'Low', status: 'Resolved', date: '2026-04-10' },
];

export const MOCK_OH_ANALYTICS = [
    { month: 'Nov', globalScans: 4200, activeOrgs: 12 },
    { month: 'Dec', globalScans: 4800, activeOrgs: 12 },
    { month: 'Jan', globalScans: 5900, activeOrgs: 15 },
    { month: 'Feb', globalScans: 7100, activeOrgs: 18 },
    { month: 'Mar', globalScans: 8500, activeOrgs: 21 },
    { month: 'Apr', globalScans: 9200, activeOrgs: 22 },
];
