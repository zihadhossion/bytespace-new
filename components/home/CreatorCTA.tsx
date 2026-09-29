interface CreatorCTAProps {
  className?: string;
}

export default function CreatorCTA({ className = "" }: CreatorCTAProps) {
  return (
    <section
      id="creator-cta"
      className={`bg-brand-800 text-white ${className}`}
      aria-label="Become a creator"
    />
  );
}
