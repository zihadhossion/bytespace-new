import Header from "@/components/layout/Header";

interface FixedHeaderProps {
  variant?: "full" | "logo";
}

export default function FixedHeader({ variant }: FixedHeaderProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <Header tone="dark" variant={variant} />
    </div>
  );
}
