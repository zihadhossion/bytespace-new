import type { ReactNode } from "react";

interface CardShellProps {
  lift?: boolean;
  children: ReactNode;
}

export default function CardShell({ lift = false, children }: CardShellProps) {
  return (
    <article
      className={`rounded-card border border-steel-200 bg-white p-4 pb-[21px] transition ${
        lift ? "duration-300 group-hover:-translate-y-1 " : ""
      }group-hover:border-steel-300 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]`}
    >
      {children}
    </article>
  );
}
