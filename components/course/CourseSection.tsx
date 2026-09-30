import type { ReactNode } from "react";

import Title from "@/components/ui/Title";

interface CourseSectionProps {
  id: string;
  heading: string;
  children: ReactNode;
}

export default function CourseSection({
  id,
  heading,
  children,
}: CourseSectionProps) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-6">
      <Title
        as="h2"
        id={id}
        variant="subheading"
        className="text-subheading font-semibold text-steel-950"
      >
        {heading}
      </Title>
      {children}
    </section>
  );
}
