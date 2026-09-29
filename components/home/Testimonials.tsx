interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className = "" }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={`bg-surface ${className}`}
      aria-label="What our community is saying"
    />
  );
}
