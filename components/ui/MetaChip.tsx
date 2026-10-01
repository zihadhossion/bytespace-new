import type { ReactNode } from "react";

import Icon from "@/components/ui/Icon";

interface MetaChipProps {
  icon: string;
  iconAlt: string;
  className?: string;
  children: ReactNode;
}

export default function MetaChip({
  icon,
  iconAlt,
  className,
  children,
}: MetaChipProps) {
  const base =
    "flex items-center gap-1 rounded-full bg-steel-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-steel-700";

  return (
    <span className={className ? `${base} ${className}` : base}>
      <Icon src={icon} alt={iconAlt} className="h-5 w-5" />
      {children}
    </span>
  );
}
