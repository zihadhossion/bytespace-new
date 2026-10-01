import Link from "next/link";

import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { featuredCategories } from "@/data/categories";
import { categoryIcon } from "@/lib/images";

const icons: Record<string, string> = {
  Design: "design",
  Development: "development",
  "IT & Software": "it-software",
  Business: "business",
  Marketing: "marketing",
  Photography: "photography",
};

interface LearningPathsProps {
  className?: string;
}

export default function LearningPaths({ className = "" }: LearningPathsProps) {
  return (
    <section
      id="learning-paths"
      className={`mx-auto w-full max-w-page px-5 pt-12 pb-16 sm:px-6 md:px-0 md:pt-[72px] md:pb-[120px] ${className}`}
      aria-label="Explore diverse learning paths"
    >
      <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
        <Title as="h2" variant="heading" className="text-heading text-ink">
          Explore Diverse Learning Paths at Bytespace
        </Title>
        <Title as="p" variant="raw" className="text-lg text-steel-400">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&#8217;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </Title>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:mt-[68px] lg:grid-cols-6 lg:gap-10">
        {featuredCategories.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className="flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-steel-200 bg-white transition-shadow hover:shadow-md"
          >
            <Icon
              src={categoryIcon(icons[category.label] ?? "design")}
              alt="Category"
              className="h-12 w-12 md:h-[60px] md:w-[60px]"
            />
            <span className="text-center text-[20px] leading-[1.2] font-medium text-steel-950">
              {category.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
