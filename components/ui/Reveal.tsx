"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  /** Seconds to wait before the reveal starts (for staggering). */
  delay?: number;
  /** Seconds the reveal lasts. */
  duration?: number;
  className?: string;
}

/**
 * Fade-up on first scroll into view.
 *
 * SSR renders `data-reveal="hidden"` so there is no flash of content; a
 * <noscript> style in the root layout forces the visible state when JS is
 * off. Users who prefer reduced motion see the content immediately
 * (handled in CSS + skipped by the observer here).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  duration = 0.45,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced-motion users get the visible state from CSS ([data-reveal]
    // is forced visible under prefers-reduced-motion), so no state flip
    // is needed here.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      // Fire once the element is 80px inside the viewport; threshold 0 keeps
      // sections taller than the viewport from never triggering.
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={visible ? "visible" : "hidden"}
      className={cn(className)}
      style={
        {
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
