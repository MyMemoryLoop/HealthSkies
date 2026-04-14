import { useAuthStore } from '../../store';

export default function HealthProfilePage() {
    const { user } = useAuthStore();
    if (!user) return null;

    return (
        <div className="space-y-6 animate-fade-in max-w-4xl mx-auto pb-8">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Health Profile</h1>
                <p className="text-gray-500 mt-1">Manage your personal health information and settings</p>
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-vc-light-grey flex items-center justify-center text-3xl font-medium text-vc-dark-navy shrink-0 border-4 border-white shadow-sm">
                    {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold text-vc-dark-navy">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                    <div className="mt-3 inline-flex items-center text-xs font-bold uppercase tracking-wider text-vc-blue bg-vc-gold-light px-3 py-1 rounded-full border border-blue-100">
                        Employee • {user.clientId?.toUpperCase() || 'UNKNOWN'}
                    </div>
                </div>
                <button className="bg-white border border-gray-200 text-vc-dark-navy px-6 py-2 rounded-lg font-medium hover:bg-vc-light-grey transition-colors w-full md:w-auto mt-4 md:mt-0 shadow-sm">
                    Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-vc-dark-navy text-lg mb-4 border-b border-gray-100 pb-2">Physical Characteristics</h3>
                    <div className="space-y-4 text-sm mt-4">
                        <div className="flex justify-between items-center"><span className="text-gray-500">Age</span><span className="font-medium text-vc-dark-navy">{user.age || '--'} years</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-500">Gender</span><span className="font-medium text-vc-dark-navy capitalize">{user.gender || '--'}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-500">Height</span><span className="font-medium text-vc-dark-navy">{user.height ?? '--'} cm</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-500">Weight</span><span className="font-medium text-vc-dark-navy">{user.weight ?? '--'} kg</span></div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-vc-dark-navy text-lg mb-4 border-b border-gray-100 pb-2">Medical History</h3>
                    <div className="space-y-4 text-sm mt-4">
                        <div className="flex justify-between items-center"><span className="text-gray-500">Smoking Status</span><span className="font-medium text-vc-dark-navy bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{user.smoking ? 'Current Smoker' : 'Non-smoker'}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-500">Diabetic</span><span className="font-medium text-vc-dark-navy bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{user.diabetes ? 'Yes' : 'No'}</span></div>
                        <div className="flex justify-between items-center"><span className="text-gray-500">Blood Pressure Meds</span><span className="font-medium text-vc-dark-navy bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{user.bpMeds ? 'Yes' : 'No'}</span></div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400">Profile data is securely stored and follows Healthy Skies privacy guidelines.</p>
            </div>
        </div>
    );
}
