import uaeLogo from '../assets/healthyskies-uae-logo.png';

export const HealthySkiesLogo = ({ className = '' }: { className?: string }) => (
    <div className={`flex items-center justify-center ${className}`}>
        <img
            src={uaeLogo}
            alt="Healthy Skies Logo"
            className="h-12 w-auto object-contain mix-blend-multiply"
        />
    </div>
);

export const VidaCentricLogo = HealthySkiesLogo;
