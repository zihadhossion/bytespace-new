import type { Metadata } from "next";

import CourseLayout from "@/components/course/CourseLayout";
import CourseSection from "@/components/course/CourseSection";
import AppImage from "@/components/ui/AppImage";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import Title from "@/components/ui/Title";
import {
  courseDescription,
  keyPoints,
  sneakPeekImages,
} from "@/data/course-content";
import {
  courseSlugs,
  metadataForCourse,
  requireCourse,
} from "@/lib/course-route";
import { images } from "@/lib/images";

interface CourseDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courseSlugs();
}

export function generateMetadata(
  props: CourseDetailsPageProps,
): Promise<Metadata> {
  return metadataForCourse(props, (course) => ({
    title: course.title,
    description: `${course.subtitle ?? `Learn ${course.title} on ByteSpace`} Taught by ${course.author}.`,
  }));
}

export default async function CourseDetailsPage(
  props: CourseDetailsPageProps,
) {
  const course = await requireCourse(props);

  return (
    <CourseLayout course={course} active="about">
      <Reveal>
        <CourseSection id="description-heading" heading="Description">
          <Title
            as="p"
            variant="base"
            className="whitespace-pre-line text-base text-steel-700"
          >
            {courseDescription.join("\n\n")}
          </Title>
        </CourseSection>
      </Reveal>

      <Reveal delay={0.08}>
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
      </Reveal>

      <Reveal delay={0.16}>
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
      </Reveal>
    </CourseLayout>
  );
}
