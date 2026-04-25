export const HealthySkiesLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <img
            src="/healthyskies-uae-logo.png"
            alt="Healthy Skies Logo"
            className="h-12 w-auto object-contain mix-blend-multiply"
        />
    </div>
);

export const VidaCentricLogo = HealthySkiesLogo;
