import { lazy, Suspense } from 'react';
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
const OrgEmployeesPage = lazy(() => import('./features/orgAdmin/OrgEmployeesPage'));
const OrgAnalyticsPage = lazy(() => import('./features/orgAdmin/OrgAnalyticsPage'));
const OrgReportsPage = lazy(() => import('./features/orgAdmin/OrgReportsPage'));
const OrgSettingsPage = lazy(() => import('./features/orgAdmin/OrgSettingsPage'));
const OhAdminDashboard = lazy(() => import('./features/ohAdmin/OhAdminDashboard'));
const OhClientOnboarding = lazy(() => import('./features/ohAdmin/OhClientOnboarding'));
const OhSubscriptions = lazy(() => import('./features/ohAdmin/OhSubscriptions'));
const OhServiceConfig = lazy(() => import('./features/ohAdmin/OhServiceConfig'));
const OhSupport = lazy(() => import('./features/ohAdmin/OhSupport'));
const PlatformAdminDashboard = lazy(() => import('./features/platformAdmin/PlatformAdminDashboard'));

export const routes: RouteObject[] = [
    { path: '/', element: <Navigate to="/login" replace /> },
    { path: '/login', element: <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-vc-blue opacity-20 animate-pulse"></div></div>}><LoginPage /></Suspense> },
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
            { path: 'employees', element: <OrgEmployeesPage /> },
            { path: 'analytics', element: <OrgAnalyticsPage /> },
            { path: 'reports', element: <OrgReportsPage /> },
            { path: 'settings', element: <OrgSettingsPage /> },
            { path: '*', element: <PlaceholderPage /> }
        ],
    },
    {
        path: '/oh-admin',
        element: <RoleGuard allowedRoles={['ohAdmin']} />,
        children: [
            { index: true, element: <OhAdminDashboard /> },
            { path: 'onboarding', element: <OhClientOnboarding /> },
            { path: 'subscriptions', element: <OhSubscriptions /> },
            { path: 'services', element: <OhServiceConfig /> },
            { path: 'support', element: <OhSupport /> },
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
