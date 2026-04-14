export const HealthySkiesLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <img
            src="/healthy-skies-logo.jpeg"
            alt="Healthy Skies Logo"
            className="h-12 w-auto object-contain mix-blend-multiply scale-[2.5]"
        />
    </div>
);

export const VidaCentricLogo = HealthySkiesLogo;
