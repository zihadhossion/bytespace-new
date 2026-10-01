import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import Title from "@/components/ui/Title";
import { container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFoundPage() {
  return (
    <>
      <div className="relative min-h-screen bg-brand-800">
        <GridOverlay />

        <Header tone="dark" />

        <main className={`relative ${container} flex flex-col items-center pb-[125px] pt-[53px] text-center`}>
          <span className="block select-none animate-slide-up bg-[linear-gradient(180deg,#D4FB20_0%,rgba(212,251,32,0.96)_25%,rgba(212,251,32,0.81)_50.5%,rgba(212,251,32,0.61)_68%,rgba(255,255,255,0)_100%)] bg-clip-text font-heading text-[clamp(140px,33.3vw,480px)] leading-none font-semibold tracking-[-0.01em] text-transparent">
            404
          </span>

          <Title
            as="h1"
            variant="raw"
            className="mt-[max(-9.23vw,-133px)] animate-fade-up text-[clamp(36px,5vw,72px)] leading-[1.2] tracking-[-0.01em] text-white [animation-delay:80ms]"
          >
            The page you are looking{" "}
            <br className="hidden md:inline" />
            for doesn&#8217;t exist
          </Title>

          <Title
            as="p"
            variant="raw"
            className="mt-[35px] animate-fade-up font-heading text-[16.4px] text-steel-100 [animation-delay:160ms]"
          >
            Try to use a correct url or go back to homepage to start again
          </Title>

          <Button
            href="/"
            className="mt-[33px] animate-fade-up [animation-delay:240ms]"
          >
            Back to Home
          </Button>
        </main>
      </div>

      <Footer />
    </>
  );
}
