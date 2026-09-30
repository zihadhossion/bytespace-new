import Button from "@/components/ui/Button";

export type CourseTabId = "about" | "lessons" | "reviews";

interface CourseTabsProps {
  slug: string;
  active: CourseTabId;
  lessonsLabel?: string;
}

export default function CourseTabs({
  slug,
  active,
  lessonsLabel = "Lessons",
}: CourseTabsProps) {
  const tabs: { id: CourseTabId; label: string; href: string }[] = [
    { id: "about", label: "About", href: `/courses/${slug}` },
    {
      id: "lessons",
      label: lessonsLabel,
      href: `/courses/${slug}/lessons`,
    },
    {
      id: "reviews",
      label: "Reviews",
      href: `/courses/${slug}/reviews`,
    },
  ];

  return (
    <nav aria-label="Course sections" className="flex flex-wrap gap-4">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          href={tab.href}
          variant={tab.id === active ? "primary" : "chip"}
          size="none"
          scroll={false}
          aria-current={tab.id === active ? "page" : undefined}
          className="px-4 py-3 text-label-m"
        >
          {tab.label}
        </Button>
      ))}
    </nav>
  );
}
