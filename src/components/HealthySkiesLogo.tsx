export const HealthySkiesLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        {/* SVG Logo Mark */}
        <svg viewBox="0 0 40 40" className="h-8 w-auto shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E8D48A" />
                    <stop offset="50%" stopColor="#D4A843" />
                    <stop offset="100%" stopColor="#C8972E" />
                </linearGradient>
            </defs>
            {/* Wing Shape - Two overlapping paths */}
            <path d="M5 20 C 15 5, 30 0, 35 15 C 30 30, 15 35, 5 20 Z" fill="url(#goldGradient)" opacity="0.9" />
            <path d="M15 30 C 25 15, 35 10, 40 20 C 35 35, 25 40, 15 30 Z" fill="url(#goldGradient)" opacity="0.7" />

            {/* Medical Cross */}
            <rect x="18" y="10" width="12" height="12" rx="2" fill="#1B2E5A" />
            <path d="M24 13 V 19 M 21 16 H 27" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Stacked Wordmark */}
        <div className="flex flex-col justify-center">
            <span className="text-[#1B2E5A] font-bold text-[13px] tracking-[0.1em] leading-none mb-0.5">HEALTHY</span>
            <span className="text-[#C8972E] font-semibold text-[10px] tracking-[0.25em] leading-none">SKIES</span>
        </div>
    </div>
);

export const VidaCentricLogo = HealthySkiesLogo;
