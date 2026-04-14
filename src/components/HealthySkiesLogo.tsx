export const HealthySkiesLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <img
            src="/NewLogo.png"
            alt="Healthy Skies Logo"
            className="h-12 w-auto object-contain"
        />
    </div>
);

export const VidaCentricLogo = HealthySkiesLogo;
