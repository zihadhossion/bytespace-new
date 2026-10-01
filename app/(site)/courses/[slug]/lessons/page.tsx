import type { Metadata } from "next";

import CourseLayout from "@/components/course/CourseLayout";
import CourseSection from "@/components/course/CourseSection";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import Title from "@/components/ui/Title";
import { lessonContent, lessonModules, lessonsIntro } from "@/data/lessons";
import {
  courseSlugs,
  metadataForCourse,
  requireCourse,
} from "@/lib/course-route";
import { images } from "@/lib/images";

interface CourseLessonsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courseSlugs();
}

export function generateMetadata(
  props: CourseLessonsPageProps,
): Promise<Metadata> {
  return metadataForCourse(props, (course) => ({
    title: `${course.title} — Lessons`,
    description: `Explore the modules and lessons of ${course.title} on ByteSpace.`,
  }));
}

export default async function CourseLessonsPage(
  props: CourseLessonsPageProps,
) {
  const course = await requireCourse(props);

  return (
    <CourseLayout course={course} active="lessons" lessonsLabel="Lesson">
      <CourseSection id="modules-heading" heading={lessonsIntro.heading}>
        <Title as="p" variant="base" className="text-base text-steel-700">
          {lessonsIntro.body}
        </Title>
        <Title
          as="h2"
          variant="subheading"
        >
          {lessonsIntro.listHeading}
        </Title>

        <ul className="flex flex-col gap-5 sm:gap-6">
          {lessonModules.map((module, index) => (
            <Reveal
              key={module.title}
              as="li"
              delay={(index % 3) * 0.08}
              className="flex items-start gap-3 sm:gap-[13px]"
            >
              <div className="mt-px flex h-14 w-14 shrink-0 items-center justify-center rounded-card bg-volt-400 sm:h-[72px] sm:w-[72px]">
                <Icon
                  src={images.icons.moduleVideo}
                  alt="Video"
                  className="h-7 w-7 sm:h-10 sm:w-10"
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
            </Reveal>
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

        <div className="flex w-full flex-col gap-2 rounded-2xl border border-steel-200 bg-white p-5 sm:p-6">
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
