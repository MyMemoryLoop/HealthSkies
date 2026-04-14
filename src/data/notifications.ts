import type { Notification } from '../types';

export const NOTIFICATIONS: Notification[] = [
    {
        id: 'notif-1',
        userId: 'user-emp-1',
        title: 'New Health Report Available',
        message: 'Your latest digital health scan report has been fully analyzed and is ready for your review. See your updated Wellness Score and detailed mind and body metrics.',
        date: '2026-04-09T10:15:00Z',
        read: false,
        type: 'scan'
    },
    {
        id: 'notif-2',
        userId: 'user-emp-1',
        title: 'Upcoming Appointment Reminder',
        message: 'Dr. Sarah Ahmed at 14:00 on Apr 15. Please ensure your camera and microphone are working correctly before joining the secure telehealth room.',
        date: '2026-04-14T14:00:00Z',
        read: false,
        type: 'appointment'
    },
    {
        id: 'notif-3',
        userId: 'user-emp-1',
        title: 'Welcome to Healthy Skies!',
        message: 'Your company has enrolled you in Healthy Skies. Complete your first scan today to get started on your health journey.',
        date: '2025-10-01T09:00:00Z',
        read: true,
        type: 'system'
    }
];
