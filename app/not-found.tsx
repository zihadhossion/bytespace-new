import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";

import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist.",
};

const gridBackground: CSSProperties = {
  backgroundImage: [
    "linear-gradient(to right, rgba(255,255,255,0.12) 0 2px, transparent 2px)",
    "linear-gradient(to bottom, transparent 0 118px, rgba(255,255,255,0.12) 118px 120px)",
  ].join(", "),
  backgroundSize: "120px 120px",
};

const gradient404: CSSProperties = {
  backgroundImage:
    "linear-gradient(180deg, #d4fb20 0%, rgba(212, 251, 32, 0.25) 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  transform: "scaleX(1.275)",
};

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen bg-brand-800 [&_header]:bg-transparent"
      style={gridBackground}
    >
      <Header tone="dark" />

      <main className="mx-auto flex w-full max-w-page flex-col items-center px-6 pb-[125px] pt-14 text-center lg:px-10">
        <span
          className="block select-none font-heading text-[clamp(140px,25.6vw,368px)] leading-none font-semibold text-transparent"
          style={gradient404}
        >
          404
        </span>

        <h1 className="-mt-[14px] text-[clamp(36px,5vw,72px)] leading-[1.2] tracking-[-0.01em] text-white">
          The page you are looking
          <br />
          for doesn&#8217;t exist
        </h1>

        <p className="mt-[57px] text-base text-steel-100">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex h-[46px] items-center justify-center rounded-full bg-volt-400 px-6 text-lg font-medium text-steel-950 transition-colors duration-200 hover:bg-volt-500"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
