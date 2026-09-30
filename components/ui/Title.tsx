import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  display: "text-display font-semibold text-steel-950",
  title: "text-title font-semibold text-steel-950",
  heading: "text-heading font-semibold text-steel-950",
  subheading: "text-subheading font-semibold text-steel-950",
  lg: "text-lg text-steel-700",
  base: "text-base text-steel-700",
  sm: "text-sm text-steel-700",
  xs: "text-xs text-steel-700",
  raw: "",
} as const;

export type TitleVariant = keyof typeof variants;

type TitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  variant?: TitleVariant;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const Title = ({
  as: Element = "h1",
  variant = "raw",
  className,
  children,
  ...props
}: TitleProps) => (
  <Element className={cn(variants[variant], className)} {...props}>
    {children}
  </Element>
);

export default Title;
