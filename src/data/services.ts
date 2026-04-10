import type { Service } from '../types';

export const SERVICES: Service[] = [
    {
        id: 'srv-1',
        name: 'Annual Health Check',
        description: 'Comprehensive blood panel and physical assessment.',
        provider: 'Alula',
        status: 'active',
        imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
        category: 'general'
    },
    {
        id: 'srv-2',
        name: 'Mental Health Assessment',
        description: 'Guided psychological evaluation with a licensed therapist.',
        provider: 'Abi',
        status: 'active',
        imageUrl: 'https://images.unsplash.com/photo-1520699918507-3c3e05c46b0c?auto=format&fit=crop&q=80&w=600',
        category: 'mental-health'
    },
    {
        id: 'srv-3',
        name: 'Vaccination Appointment',
        description: 'Book your seasonal influenza or travel vaccines.',
        provider: 'Internal',
        status: 'active',
        imageUrl: 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80&w=600',
        category: 'general'
    },
    {
        id: 'srv-4',
        name: 'Genetic Screening',
        description: 'Advanced DNA analysis for predictive health insights.',
        provider: 'Bubl',
        status: 'coming_soon',
        imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=600',
        category: 'screening'
    },
    {
        id: 'srv-5',
        name: 'Cardiology Consultation',
        description: 'Specialist review of your VidaScore heart metrics.',
        provider: 'Internal',
        status: 'coming_soon',
        imageUrl: 'https://images.unsplash.com/photo-1628348070830-df13f7c32b50?auto=format&fit=crop&q=80&w=600',
        category: 'cardiology'
    },
    {
        id: 'srv-6',
        name: 'Personalized Nutrition Planning',
        description: 'Work with certified dietitians to create a customized meal plan prioritizing your health and energy.',
        provider: 'Internal',
        status: 'active',
        imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600',
        category: 'nutrition'
    },
    {
        id: 'srv-7',
        name: 'Online Core Fitness Training',
        description: 'Join virtual guided fitness sessions that adjust to your personal health metrics and mobility.',
        provider: 'Internal',
        status: 'active',
        imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600',
        category: 'fitness'
    }
];
