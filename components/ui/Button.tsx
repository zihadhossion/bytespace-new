import { cva, type VariantProps } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import type {
  ButtonHTMLAttributes,
  ReactNode,
  Ref,
} from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 outline-0 not-disabled:cursor-pointer not-disabled:active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-volt-400 text-steel-950 hover:bg-volt-500",
        brand: "bg-brand-800 text-white hover:bg-brand-700",
        outline:
          "border border-steel-200 text-steel-950 hover:border-steel-400 hover:bg-steel-50",
        ghost: "text-steel-700 hover:text-steel-950",
        chip: "bg-steel-50 text-steel-700 hover:bg-steel-100 hover:text-steel-950",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-[46px] px-6 text-lg",
        lg: "h-14 px-8 text-lg",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonSharedProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: ReactNode;
};

type ButtonProps = ButtonSharedProps &
  (
    | ({ href: string; ref?: Ref<HTMLAnchorElement> } & Omit<LinkProps, "href">)
    | ({
        href?: undefined;
        ref?: Ref<HTMLButtonElement>;
      } & ButtonHTMLAttributes<HTMLButtonElement>)
  );

export default function Button({
  variant,
  size,
  className,
  href,
  ref,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href !== undefined) {
    return (
      <Link
        href={href}
        ref={ref}
        className={classes}
        {...(props as Omit<LinkProps, "href">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      ref={ref}
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
