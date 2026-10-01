import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import FixedHeader from "@/components/layout/FixedHeader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <FixedHeader />

      {children}

      <Footer />
    </div>
  );
}
