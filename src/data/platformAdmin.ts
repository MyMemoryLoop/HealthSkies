export const MOCK_TENANTS = [
    { id: 'T-001', name: 'Healthy Skies', region: 'us-east-1', instances: 42, status: 'Healthy', version: 'v2.4.1' },
    { id: 'T-002', name: 'Global Wellness Alliance', region: 'eu-west-1', instances: 18, status: 'Healthy', version: 'v2.4.1' },
    { id: 'T-003', name: 'Pacific Health Co.', region: 'ap-southeast-2', instances: 8, status: 'Degraded', version: 'v2.4.0' },
    { id: 'T-004', name: 'MediScan Enterprise', region: 'us-west-2', instances: 24, status: 'Healthy', version: 'v2.4.1' },
];

export const MOCK_SYSTEM_LOGS = [
    { timestamp: '2026-04-13T21:15:02Z', level: 'ERROR', service: 'auth-service', message: 'JWT validation failed for kid: x92jfl' },
    { timestamp: '2026-04-13T21:14:45Z', level: 'WARN', service: 'db-cluster-east', message: 'Connection pool nearing capacity (85%)' },
    { timestamp: '2026-04-13T21:10:12Z', level: 'INFO', service: 'telemetry-worker', message: 'Batch processing complete. Inserted 4,204 records.' },
    { timestamp: '2026-04-13T21:05:00Z', level: 'INFO', service: 'gateway-api', message: 'Rate limit refreshed for IP: 192.168.1.104' },
    { timestamp: '2026-04-13T20:59:33Z', level: 'ERROR', service: 'webrtc-signaling', message: 'ICE negotiation timeout on room: vc-8492' },
    { timestamp: '2026-04-13T20:45:11Z', level: 'INFO', service: 'sys-monitor', message: 'Auto-scaling group expanded +2 nodes in eu-west-1' },
];

export const MOCK_API_TELEMETRY = [
    { time: '00:00', latency: 45, rps: 1200 },
    { time: '04:00', latency: 42, rps: 800 },
    { time: '08:00', latency: 120, rps: 4500 },
    { time: '12:00', latency: 135, rps: 5200 },
    { time: '16:00', latency: 95, rps: 3800 },
    { time: '20:00', latency: 60, rps: 1800 },
];
