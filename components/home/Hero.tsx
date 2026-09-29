interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      id="hero"
      className={`bg-brand-800 text-white ${className}`}
      aria-label="Hero"
    />
  );
}
