interface PartnerLogosProps {
  className?: string;
}

export default function PartnerLogos({ className = "" }: PartnerLogosProps) {
  return (
    <section
      id="partners"
      className={`bg-steel-50 ${className}`}
      aria-label="Partner logos"
    />
  );
}
