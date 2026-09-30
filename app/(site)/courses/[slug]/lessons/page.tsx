import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseLayout from "@/components/course/CourseLayout";
import CourseSection from "@/components/course/CourseSection";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { allCourses, getCourseById } from "@/data/courses";
import { lessonContent, lessonModules, lessonsIntro } from "@/data/lessons";
import { images } from "@/lib/images";

interface CourseLessonsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: CourseLessonsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseById(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} — Lessons`,
    description: `Explore the modules and lessons of ${course.title} on ByteSpace.`,
  };
}

export default async function CourseLessonsPage({
  params,
}: CourseLessonsPageProps) {
  const { slug } = await params;
  const course = getCourseById(slug);

  if (!course) {
    notFound();
  }

  return (
    <CourseLayout course={course} active="lessons" lessonsLabel="Lesson">
      <CourseSection id="modules-heading" heading={lessonsIntro.heading}>
        <Title as="p" variant="base" className="text-base text-steel-700">
          {lessonsIntro.body}
        </Title>
        <Title
          as="h2"
          variant="subheading"
          className="text-subheading font-semibold text-steel-950"
        >
          {lessonsIntro.listHeading}
        </Title>

        <ul className="flex flex-col gap-6">
          {lessonModules.map((module) => (
            <li key={module.title} className="flex items-start gap-[13px]">
              <div className="mt-px flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-card bg-volt-400">
                <Icon
                  src={images.icons.moduleVideo}
                  className="h-10 w-10"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-1">
                <Title
                  as="h3"
                  variant="raw"
                  className="text-label-m font-medium text-steel-950"
                >
                  {module.title}
                </Title>
                <Title
                  as="p"
                  variant="base"
                  className="text-base text-steel-700"
                >
                  {module.description}
                </Title>
              </div>
            </li>
          ))}
        </ul>
      </CourseSection>

      <CourseSection
        id="content-heading"
        heading={lessonContent.heading}
      >
        <Title as="p" variant="base" className="text-base text-steel-700">
          {lessonContent.body}
        </Title>
      </CourseSection>

      <CourseSection
        id="progress-heading"
        heading={lessonContent.progressHeading}
      >
        <Title as="p" variant="base" className="text-base text-steel-700">
          {lessonContent.progressBody}
        </Title>

        <div className="flex w-full flex-col gap-2 rounded-2xl bg-white p-4">
          <Title
            as="p"
            variant="raw"
            className="text-label-s font-medium text-steel-950"
          >
            {lessonContent.progress.label}
          </Title>
          <div className="flex flex-col gap-2">
            <Title
              as="h2"
              variant="heading"
              className="font-heading text-heading font-semibold text-steel-950"
            >
              {lessonContent.progress.value}
            </Title>
          </div>
          <div
            role="progressbar"
            aria-valuenow={lessonContent.progress.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 w-full overflow-hidden rounded-full bg-steel-100"
          >
            <div
              className="h-full rounded-full bg-volt-400"
              style={{ width: `${lessonContent.progress.percent}%` }}
            />
          </div>
        </div>
      </CourseSection>
    </CourseLayout>
  );
}
