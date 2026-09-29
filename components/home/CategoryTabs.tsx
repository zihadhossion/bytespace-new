import { categoryTabs } from "@/data/categories";

interface CategoryTabsProps {
  className?: string;
}

export default function CategoryTabs({ className = "" }: CategoryTabsProps) {
  return (
    <nav
      id="category-tabs"
      aria-label="Course categories"
      className={`flex flex-wrap gap-3 ${className}`}
    >
      {categoryTabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`rounded-full px-4 py-2 text-base ${
            index === 0
              ? "bg-steel-950 text-white"
              : "bg-white text-steel-700 hover:text-steel-950"
          }`}
        >
          {tab}
        </button>
      ))}
      <button type="button" className="px-4 py-2 text-base text-brand-800">
        + More
      </button>
    </nav>
  );
}
