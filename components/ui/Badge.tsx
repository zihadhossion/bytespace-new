import type { ReactNode } from "react";

type Tone = "neutral" | "brand" | "volt";

const tones: Record<Tone, string> = {
  neutral: "bg-steel-50 text-steel-700",
  brand: "bg-brand-50 text-brand-800",
  volt: "bg-volt-200 text-steel-950",
};

interface BadgeProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

export default function Badge({
  children,
  tone = "neutral",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
