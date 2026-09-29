import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "brand" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-volt-400 text-steel-950 hover:bg-volt-500",
  brand: "bg-brand-800 text-white hover:bg-brand-700",
  outline: "border border-steel-200 text-steel-950 hover:border-steel-400",
  ghost: "text-steel-700 hover:text-steel-950",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-[46px] px-6 text-lg",
  lg: "h-14 px-8 text-lg",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
