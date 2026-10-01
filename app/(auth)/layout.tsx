import type { ReactNode } from "react";

import FixedHeader from "@/components/layout/FixedHeader";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <FixedHeader variant="logo" />

      {children}
    </div>
  );
}
