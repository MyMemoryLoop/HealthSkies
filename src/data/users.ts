import type { User } from '../types';

export const DEMO_USERS: User[] = [
    {
        id: 'user-psa',
        name: 'Paul Gordon',
        email: 'paul@healthyskies.com',
        role: 'platformAdmin',
    },
    {
        id: 'user-oha',
        name: 'Karen Storey',
        email: 'karen@healthyskies.com',
        role: 'ohAdmin',
    },
    {
        id: 'user-org',
        name: 'Sarah Mitchell',
        email: 'sarah.mitchell@acmecorp.com',
        role: 'orgAdmin',
        clientId: 'client-1',
    },
    {
        id: 'user-emp-1',
        name: 'James Wilson',
        email: 'james.wilson@acmecorp.com',
        role: 'employee',
        clientId: 'client-1',
        age: 34, height: 178, weight: 82, gender: 'male',
        smoking: false, diabetes: false, bpMeds: false,
        department: 'Sales'
    },
    {
        id: 'user-emp-2',
        name: 'Sarah Roberts',
        email: 'sarah.roberts@acmecorp.com',
        role: 'employee',
        clientId: 'client-1',
        age: 29, height: 165, weight: 61, gender: 'female',
        department: 'Marketing'
    },
    {
        id: 'user-emp-3',
        name: 'Michael Chen',
        email: 'michael.chen@acmecorp.com',
        role: 'employee',
        clientId: 'client-1',
        age: 45, height: 175, weight: 91, gender: 'male',
        department: 'Engineering'
    },
    {
        id: 'user-emp-4',
        name: 'Emma Thompson',
        email: 'emma.thompson@acmecorp.com',
        role: 'employee',
        clientId: 'client-1',
        age: 38, height: 170, weight: 68, gender: 'female',
        department: 'Leadership'
    },
    {
        id: 'user-emp-5',
        name: 'David Okonkwo',
        email: 'david.okonkwo@acmecorp.com',
        role: 'employee',
        clientId: 'client-1',
        age: 52, height: 183, weight: 95, gender: 'male',
        department: 'Operations'
    }
];

export const getUserById = (id: string): User | undefined => DEMO_USERS.find(u => u.id === id);
export const getUserByEmail = (email: string): User | undefined => DEMO_USERS.find(u => u.email === email);
export const getUsersByClient = (clientId: string): User[] => DEMO_USERS.filter(u => u.clientId === clientId);
