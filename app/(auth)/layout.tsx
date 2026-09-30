import type { ReactNode } from "react";

import Header from "@/components/layout/Header";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 z-30">
        <Header tone="dark" variant="logo" />
      </div>

      {children}
    </div>
  );
}
