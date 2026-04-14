export type UserRole = 'employee' | 'orgAdmin' | 'ohAdmin' | 'platformAdmin';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    clientId?: string;
    department?: string;
    // Employee-specific
    age?: number;
    height?: number; // cm
    weight?: number; // kg
    gender?: 'male' | 'female';
    smoking?: boolean;
    diabetes?: boolean;
    bpMeds?: boolean;
}

export interface HealthMetric {
    name: string;
    value: number;
    unit: string;
    category: 'heart' | 'mindBody';
    status: 'good' | 'moderate' | 'poor';
    min: number;
    max: number;
    optimalMin: number;
    optimalMax: number;
    description: string;
}

export interface ScanResult {
    id: string;
    userId: string;
    date: string;
    vidaScore: number;
    heartHealth: HealthMetric[];
    mindBody: HealthMetric[];
}

export interface EnterpriseClient {
    id: string;
    name: string;
    industry: string;
    employeeCount: number;
    plan: 'starter' | 'enterprise' | 'enterprisePlus';
    status: 'active' | 'onboarding' | 'suspended';
    joinedDate: string;
    avgWellnessScore: number | null;
    participationRate: number;
    scansThisMonth: number;
}

export interface Appointment {
    id: string;
    userId: string;
    type: 'video' | 'phone';
    date: string;
    time: string;
    doctorName: string;
    speciality: string;
    status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    date: string;
    read: boolean;
    type: 'scan' | 'appointment' | 'system';
}

export interface Service {
    id: string;
    name: string;
    description: string;
    provider: 'Alula' | 'Abi' | 'Bubl' | 'Internal';
    status: 'active' | 'coming_soon';
    imageUrl: string;
    category: 'nutrition' | 'fitness' | 'mental-health' | 'screening' | 'general' | 'cardiology';
}

export interface Plan {
    id: string;
    name: 'Starter' | 'Enterprise' | 'Enterprise Plus';
    priceDesc: string;
    maxEmployees: number | null; // null for unlimited
    features: string[];
}
