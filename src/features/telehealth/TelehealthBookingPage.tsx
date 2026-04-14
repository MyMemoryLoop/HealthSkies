import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore, useNotificationStore } from '../../store';
import { getAppointmentsForUser } from '../../data';

export default function TelehealthBookingPage() {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const { addToast } = useNotificationStore();
    const [selectedDoc, setSelectedDoc] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const appointments = user ? getAppointmentsForUser(user.id) : [];
    const upcoming = appointments.find(a => a.status === 'upcoming');

    const handleBook = (e: React.FormEvent) => {
        e.preventDefault();
        addToast('Appointment booked successfully!');
        navigate('/employee');
    };

    return (
        <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-2xl font-bold text-vc-dark-navy font-display">Telehealth</h1>
                <p className="text-gray-500 mt-1">Book virtual consultations with our specialists</p>
            </header>

            {upcoming && (
                <div className="bg-vc-blue text-white rounded-xl shadow-lg shadow-vc-blue/20 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-sm text-white/70 font-medium mb-1">Upcoming Appointment</h3>
                        <p className="text-xl font-bold">{upcoming.doctorName}</p>
                        <p className="text-white/70 mt-1">{upcoming.speciality}</p>
                        <div className="flex items-center gap-4 mt-4 text-sm font-medium bg-white/10 px-4 py-2 rounded-lg inline-flex">
                            <span className="flex items-center gap-1">🗓 {upcoming.date}</span>
                            <span className="flex items-center gap-1">⏱ {upcoming.time}</span>
                        </div>
                    </div>
                    <Link
                        to={`/employee/telehealth/call/${upcoming.id}`}
                        className="w-full md:w-auto bg-white text-vc-blue font-bold px-6 py-3 rounded-lg hover:bg-vc-light-grey transition-colors text-center shadow-sm"
                    >
                        Join Call
                    </Link>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-lg font-bold text-vc-dark-navy mb-6">Book New Consultation</h2>

                <form onSubmit={handleBook} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Specialist</label>
                            <div className="space-y-3">
                                {[
                                    { id: 'doc1', name: 'Dr. Sarah Ahmed', spec: 'General Practitioner' },
                                    { id: 'doc2', name: 'Dr. Michael Chen', spec: 'Cardiologist' },
                                    { id: 'doc3', name: 'Dr. Emma Watson', spec: 'Mental Health Specialist' }
                                ].map(doc => (
                                    <label key={doc.id} className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${selectedDoc === doc.id ? 'border-vc-blue bg-vc-gold-light/50' : 'border-gray-200 hover:bg-vc-light-grey'}`}>
                                        <input type="radio" name="doctor" value={doc.id} checked={selectedDoc === doc.id} onChange={(e) => setSelectedDoc(e.target.value)} className="text-vc-blue focus:ring-vc-blue" required />
                                        <div className="ml-4">
                                            <p className="font-bold text-vc-dark-navy">{doc.name}</p>
                                            <p className="text-sm text-gray-500">{doc.spec}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Select Time (Tomorrow)</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map(time => (
                                    <label key={time} className={`text-center py-3 border rounded-xl cursor-pointer transition-colors ${selectedTime === time ? 'border-vc-blue bg-vc-gold-light/50 text-vc-blue font-bold' : 'border-gray-200 hover:bg-vc-light-grey font-medium text-gray-600'}`}>
                                        <input type="radio" name="time" value={time} checked={selectedTime === time} onChange={(e) => setSelectedTime(e.target.value)} className="sr-only" required />
                                        {time}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 flex justify-end">
                        <button type="submit" disabled={!selectedDoc || !selectedTime} className="bg-vc-blue text-white font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
