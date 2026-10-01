"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

interface CountUpProps {
  /** Stat string, e.g. "12K", "70+", "16". Numeric prefix is animated. */
  value: string;
  as?: ElementType;
  className?: string;
  /** Milliseconds for the count animation. */
  duration?: number;
}

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { target: Number(match[1]), suffix: match[2] };
}

/**
 * Counts a numeric stat up the first time it scrolls into view.
 * Strings without a leading number render as-is. Users with
 * `prefers-reduced-motion` see the final value immediately.
 */
export default function CountUp({
  value,
  as: Tag = "span",
  className,
  duration = 1000,
}: CountUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const stat = parseStat(value);
    if (!stat) return;

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.disconnect();

          // Reduced motion: the component already renders the final value.
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
          }

          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // ease-out cubic: fast start, gentle landing
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * stat.target);
            setDisplay(`${current}${stat.suffix}`);
            if (progress < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
