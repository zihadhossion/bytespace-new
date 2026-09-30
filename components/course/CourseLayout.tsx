import type { ReactNode } from "react";

import CourseHero from "@/components/course/CourseHero";
import CourseTabs, { type CourseTabId } from "@/components/course/CourseTabs";
import EnrollCard from "@/components/course/EnrollCard";
import type { Course } from "@/data/courses";

interface CourseLayoutProps {
  course: Course;
  active: CourseTabId;
  lessonsLabel?: string;
  children: ReactNode;
}

export default function CourseLayout({
  course,
  active,
  lessonsLabel,
  children,
}: CourseLayoutProps) {
  return (
    <>
      <CourseHero course={course} />

      <main className="mx-auto w-full max-w-page px-6 pb-24 lg:px-10">
        <div className="grid gap-x-[63px] xl:grid-cols-[minmax(0,725px)_412px]">
          <div className="pt-[63px]">
            <CourseTabs
              slug={course.id}
              active={active}
              lessonsLabel={lessonsLabel}
            />
            <div className="mt-10 flex flex-col gap-6">{children}</div>
          </div>

          <div className="relative z-10 mt-12 xl:-mt-[509px]">
            <EnrollCard course={course} />
          </div>
        </div>
      </main>
    </>
  );
}
