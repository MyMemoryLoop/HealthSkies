import { useLocation } from 'react-router-dom';

export default function PlaceholderPage() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1]?.replace(/-/g, ' ') || 'Module';
    const title = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

    return (
        <div className="flex-1 p-4 lg:p-8">
            <h1 className="text-2xl font-bold text-vc-dark-navy mb-6 capitalize">{title}</h1>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
                <div className="w-16 h-16 bg-vc-light-grey rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-vc-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2-2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                </div>
                <h2 className="text-lg font-medium text-vc-dark-navy mb-2">Module Under Construction</h2>
                <p className="text-gray-500 text-center max-w-md">
                    This section of the VidaCentric administrative portal is scheduled for implementation in the next phase of the platform Proof of Concept.
                </p>
            </div>
        </div>
    );
}
