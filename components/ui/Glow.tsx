interface GlowProps {
  color: "volt" | "brand";
  className: string;
}

export default function Glow({ color, className }: GlowProps) {
  const rgb = color === "volt" ? "203,252,1" : "0,59,226";
  return (
    <div
      aria-hidden
      className={`absolute rounded-full ${className}`}
      style={{
        background: `radial-gradient(circle closest-side, rgba(${rgb},1) 0%, rgba(${rgb},0) 100%)`,
        filter: "blur(40px)",
      }}
    />
  );
}
