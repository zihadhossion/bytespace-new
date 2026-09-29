interface GrowthSectionProps {
  className?: string;
}

export default function GrowthSection({ className = "" }: GrowthSectionProps) {
  return (
    <section
      id="growth"
      className={`bg-surface ${className}`}
      aria-label="Your path to professional growth"
    />
  );
}
