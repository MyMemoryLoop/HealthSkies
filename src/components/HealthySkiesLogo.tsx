export const HealthySkiesLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        <img src="/healthy-skies-logo.jpeg" alt="Healthy Skies Logo" className="h-10 w-auto object-contain" />
    </div>
);

export const VidaCentricLogo = HealthySkiesLogo;
