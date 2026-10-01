"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const TOP_OFFSET = 140;
const BOTTOM_OFFSET = 24;
const XL_QUERY = "(min-width: 1280px)";

interface StickyEnrollProps {
  children: ReactNode;
}

export default function StickyEnroll({ children }: StickyEnrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number | null>(null);
  const directionRef = useRef<1 | -1>(-1);

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el || !el.parentElement) return;

      const y = window.scrollY;
      if (y !== lastY) directionRef.current = y > lastY ? 1 : -1;
      lastY = y;

      if (!window.matchMedia(XL_QUERY).matches) {
        setTop(null);
        return;
      }

      const naturalTop = el.parentElement.getBoundingClientRect().top;
      const height = el.getBoundingClientRect().height;
      const bottomTarget = window.innerHeight - BOTTOM_OFFSET - height;

      if (height <= window.innerHeight - TOP_OFFSET) {
        setTop(TOP_OFFSET);
      } else if (directionRef.current === 1) {
        setTop(bottomTarget);
      } else {
        setTop(naturalTop >= TOP_OFFSET ? TOP_OFFSET : bottomTarget);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="xl:sticky xl:transition-[top]" style={top !== null ? { top } : undefined}>
      {children}
    </div>
  );
}
