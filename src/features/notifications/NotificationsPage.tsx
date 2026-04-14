import { useNotificationStore } from '../../store';

export default function NotificationsPage() {
    const { notifications, markAsRead, markAllAsRead } = useNotificationStore();

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="space-y-6 animate-fade-in max-w-4xl mx-auto">
            <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-vc-dark-navy flex items-center gap-3">
                        Notifications
                        {unreadCount > 0 && <span className="bg-vc-danger text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-sm">{unreadCount}</span>}
                    </h1>
                    <p className="text-gray-500 mt-1">Stay updated on your health journey and upcoming events</p>
                </div>
                {unreadCount > 0 && (
                    <button
                        onClick={markAllAsRead}
                        className="text-sm font-medium text-vc-blue hover:underline text-left md:text-right bg-vc-gold-light px-3 py-1.5 rounded-lg border border-blue-100"
                    >
                        Mark all as read
                    </button>
                )}
            </header>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative">
                {notifications.length === 0 ? (
                    <div className="p-16 text-center text-gray-500 flex flex-col items-center">
                        <svg className="w-16 h-16 text-gray-200 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <p className="font-medium">You're all caught up!</p>
                        <p className="text-sm">No new notifications right now.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {notifications.map(notif => (
                            <div
                                key={notif.id}
                                className={`p-5 flex gap-5 transition-colors group ${!notif.read ? 'bg-vc-gold-light/20' : 'hover:bg-vc-light-grey'}`}
                            >
                                <div className={`w-2.5 h-2.5 rounded-full mt-2 shrink-0 shadow-sm ${!notif.read ? 'bg-vc-blue' : 'bg-transparent'}`} />
                                <div className="flex-1">
                                    <h3 className={`text-base ${!notif.read ? 'font-bold text-vc-dark-navy' : 'font-medium text-gray-700'}`}>
                                        {notif.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-1 leading-relaxed max-w-2xl">{notif.message}</p>
                                    <p className="text-xs text-gray-400 mt-3 font-medium">{new Date(notif.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                                </div>
                                {!notif.read && (
                                    <button
                                        onClick={() => markAsRead(notif.id)}
                                        className="text-xs font-medium text-gray-400 hover:text-vc-blue shrink-0 h-fit opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        Mark read
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
