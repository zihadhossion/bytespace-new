import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="fixed inset-x-0 top-0 z-50">
        <Header tone="dark" />
      </div>

      {children}

      <Footer />
    </div>
  );
}
