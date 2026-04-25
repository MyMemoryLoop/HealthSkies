import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScanStore, useAuthStore } from '../../store';
import { generateNewScanResult } from '../../data';
import PreScanScreen from './PreScanScreen';
import CameraView from './CameraView';
import ScanProgress from './ScanProgress';
import ScanComplete from './ScanComplete';

export default function HealthScanPage() {
    const [phase, setPhase] = useState<'pre' | 'scanning' | 'complete'>('pre');
    const [faceConfirmed, setFaceConfirmed] = useState(false);
    const navigate = useNavigate();

    const user = useAuthStore(state => state.user);
    const startScan = useScanStore(state => state.startScan);
    const completeScan = useScanStore(state => state.completeScan);
    const resetScan = useScanStore(state => state.resetScan);

    const handleStart = useCallback(() => {
        setPhase('scanning');
        startScan();
    }, [startScan]);

    const handleComplete = useCallback(() => {
        if (user) {
            const result = generateNewScanResult(user.id, Math.floor(Math.random() * 20) + 70);
            completeScan(result);
        }
        setPhase('complete');
    }, [user, completeScan]);

    const handleViewReport = useCallback(() => {
        resetScan();
        navigate('/employee/report/latest');
    }, [resetScan, navigate]);

    const handleFaceDetected = useCallback(() => {
        setFaceConfirmed(true);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto min-h-[calc(100vh-8rem)] flex flex-col bg-vc-dark-navy text-white rounded-2xl overflow-hidden shadow-xl animate-fade-in relative snap-start">
            {phase === 'pre' && <PreScanScreen onStart={handleStart} />}
            {phase === 'scanning' && (
                <>
                    <CameraView onFaceDetected={handleFaceDetected} />
                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-vc-dark-navy to-transparent pointer-events-none" />
                    <ScanProgress onComplete={handleComplete} faceConfirmed={faceConfirmed} />
                </>
            )}
            {phase === 'complete' && <ScanComplete onViewReport={handleViewReport} />}
        </div>
    );
}
