import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";

interface CatalogEmptyStateProps {
  title: string;
  clearHref: string;
}

export default function CatalogEmptyState({
  title,
  clearHref,
}: CatalogEmptyStateProps) {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 py-16 text-center md:mt-[77px]">
      <Title
        as="h2"
        variant="heading"
      >
        {title}
      </Title>
      <Title as="p" variant="raw" className="text-lg text-steel-400">
        Try a different search or clear your filters.
      </Title>
      <Button
        href={clearHref}
        size="none"
        className="mt-2 px-6 py-3 text-label-m"
      >
        Clear all filters
      </Button>
    </div>
  );
}
