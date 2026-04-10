import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import RoleGuard from './layout/RoleGuard';
import { PlaceholderPage } from './components';

const LoginPage = lazy(() => import('./features/auth/LoginPage'));
const EmployeeDashboard = lazy(() => import('./features/employee/EmployeeDashboard'));
const HealthScanPage = lazy(() => import('./features/scan/HealthScanPage'));
const HealthReportPage = lazy(() => import('./features/report/HealthReportPage'));
const TelehealthBookingPage = lazy(() => import('./features/telehealth/TelehealthBookingPage'));
const TelehealthCallPage = lazy(() => import('./features/telehealth/TelehealthCallPage'));
const ScanHistoryPage = lazy(() => import('./features/history/ScanHistoryPage'));
const ServicesPage = lazy(() => import('./features/services/ServicesPage'));
const HealthProfilePage = lazy(() => import('./features/profile/HealthProfilePage'));
const NotificationsPage = lazy(() => import('./features/notifications/NotificationsPage'));
const OrgAdminDashboard = lazy(() => import('./features/orgAdmin/OrgAdminDashboard'));
const OhAdminDashboard = lazy(() => import('./features/ohAdmin/OhAdminDashboard'));
const PlatformAdminDashboard = lazy(() => import('./features/platformAdmin/PlatformAdminDashboard'));

export const routes: RouteObject[] = [
    { path: '/', element: <Navigate to="/login" replace /> },
    { path: '/login', element: <LoginPage /> },
    {
        path: '/employee',
        element: <RoleGuard allowedRoles={['employee']} />,
        children: [
            { index: true, element: <EmployeeDashboard /> },
            { path: 'scan', element: <HealthScanPage /> },
            { path: 'report/:id', element: <HealthReportPage /> },
            { path: 'telehealth', element: <TelehealthBookingPage /> },
            { path: 'telehealth/call/:id', element: <TelehealthCallPage /> },
            { path: 'history', element: <ScanHistoryPage /> },
            { path: 'services', element: <ServicesPage /> },
            { path: 'profile', element: <HealthProfilePage /> },
            { path: 'notifications', element: <NotificationsPage /> },
        ],
    },
    {
        path: '/org-admin',
        element: <RoleGuard allowedRoles={['orgAdmin']} />,
        children: [
            { index: true, element: <OrgAdminDashboard /> },
            { path: '*', element: <PlaceholderPage /> }
        ],
    },
    {
        path: '/oh-admin',
        element: <RoleGuard allowedRoles={['ohAdmin']} />,
        children: [
            { index: true, element: <OhAdminDashboard /> },
            { path: '*', element: <PlaceholderPage /> }
        ],
    },
    {
        path: '/platform-admin',
        element: <RoleGuard allowedRoles={['platformAdmin']} />,
        children: [
            { index: true, element: <PlatformAdminDashboard /> },
            { path: '*', element: <PlaceholderPage /> }
        ],
    },
    { path: '*', element: <Navigate to="/" replace /> }
];
