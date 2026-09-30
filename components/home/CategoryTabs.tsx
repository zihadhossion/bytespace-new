import Button from "@/components/ui/Button";

import { categoryTabs } from "@/data/categories";

interface CategoryTabsProps {
  tabs?: string[];
  showMore?: boolean;
  centered?: boolean;
  className?: string;
  ariaLabel?: string;
  active?: string;
  hrefFor?: (tab: string) => string;
}

export default function CategoryTabs({
  tabs = categoryTabs,
  showMore = true,
  centered = true,
  className = "",
  ariaLabel = "Course categories",
  active,
  hrefFor,
}: CategoryTabsProps) {
  return (
    <nav
      id="category-tabs"
      aria-label={ariaLabel}
      className={`flex flex-nowrap items-center gap-x-4 gap-y-[21px] overflow-x-auto scrollbar-hide md:flex-wrap md:overflow-x-visible ${
        centered ? "mx-auto max-w-[1086px] md:justify-center" : ""
      } ${className}`}
    >
      {tabs.map((tab, index) => {
        const isActive = hrefFor ? tab === active : index === 0;
        const tabClassName = "shrink-0 px-4 py-3 text-base leading-[1.2]";

        return hrefFor ? (
          <Button
            key={tab}
            href={hrefFor(tab)}
            variant={isActive ? "primary" : "chip"}
            size="none"
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            className={tabClassName}
          >
            {tab}
          </Button>
        ) : (
          <Button
            key={tab}
            variant={isActive ? "primary" : "chip"}
            size="none"
            className={tabClassName}
          >
            {tab}
          </Button>
        );
      })}
      {showMore ? (
        <Button
          variant="ghost"
          size="none"
          className="shrink-0 px-1 py-3 text-base leading-[1.2] text-brand-800 hover:text-brand-800 hover:opacity-70"
        >
          + More
        </Button>
      ) : null}
    </nav>
  );
}
