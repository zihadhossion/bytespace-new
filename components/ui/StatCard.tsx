interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export default function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-heading text-brand-800">{value}</span>
      <span className="text-lg text-steel-700">{label}</span>
    </div>
  );
}
