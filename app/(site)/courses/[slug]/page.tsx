import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseLayout from "@/components/course/CourseLayout";
import CourseSection from "@/components/course/CourseSection";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import {
  courseDescription,
  keyPoints,
  sneakPeekImages,
} from "@/data/course-content";
import { allCourses, getCourseById } from "@/data/courses";
import { images } from "@/lib/images";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: CourseDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseById(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: course.title,
    description: `${course.subtitle ?? `Learn ${course.title} on ByteSpace`} Taught by ${course.author}.`,
  };
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { slug: courseSlug } = await params;
  const course = getCourseById(courseSlug);

  if (!course) {
    notFound();
  }

  return (
    <CourseLayout course={course} active="about">
      <CourseSection id="description-heading" heading="Description">
        <Title
          as="p"
          variant="base"
          className="whitespace-pre-line text-base text-steel-700"
        >
          {courseDescription.join("\n\n")}
        </Title>
      </CourseSection>

      <CourseSection id="sneak-peak-heading" heading="Sneak Peak">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:flex lg:justify-between">
          {sneakPeekImages.map((src, index) => (
            <AppImage
              key={src}
              src={src}
              alt={`Sneak peek preview ${index + 1}`}
              width={334}
              height={250}
              className="aspect-[167/125] w-full rounded-2xl object-cover lg:h-[125px] lg:w-[167px]"
            />
          ))}
        </div>
      </CourseSection>

      <CourseSection id="key-points-heading" heading="Key Points">
        <ul className="flex flex-col gap-3">
          {keyPoints.map((point) => (
            <li key={point} className="flex h-[26px] items-center gap-2">
              <Icon
                src={images.icons.checkBlue}
                alt="Checkmark"
                className="h-6 w-6 shrink-0"
              />
              <span className="text-base text-steel-700">{point}</span>
            </li>
          ))}
        </ul>
      </CourseSection>
    </CourseLayout>
  );
}
