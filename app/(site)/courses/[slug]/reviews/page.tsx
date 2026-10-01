import type { Metadata } from "next";

import CourseLayout from "@/components/course/CourseLayout";
import CourseSection from "@/components/course/CourseSection";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import Title from "@/components/ui/Title";
import { reviewsContent } from "@/data/reviews";
import {
  courseSlugs,
  metadataForCourse,
  requireCourse,
} from "@/lib/course-route";
import { images } from "@/lib/images";

interface CourseReviewsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return courseSlugs();
}

export function generateMetadata(
  props: CourseReviewsPageProps,
): Promise<Metadata> {
  return metadataForCourse(props, (course) => ({
    title: `${course.title} — Reviews`,
    description: `Read learner reviews and ratings for ${course.title} on ByteSpace.`,
  }));
}

function StarIcons() {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <Icon
          key={index}
          src={images.icons.starDark}
          alt="Star"
          className="h-5 w-5 sm:h-6 sm:w-6"
        />
      ))}
    </>
  );
}

function StarRow() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      <StarIcons />
    </div>
  );
}

export default async function CourseReviewsPage(props: CourseReviewsPageProps) {
  const course = await requireCourse(props);

  const { summary } = reviewsContent;

  return (
    <CourseLayout course={course} active="reviews" lessonsLabel="Lesson">
      <CourseSection
        id="reviews-heading"
        heading={reviewsContent.heading}
      >
        <Title as="p" variant="base" className="text-base text-steel-700">
          {reviewsContent.body}
        </Title>

        <div className="flex flex-col items-start gap-6 rounded-2xl border border-steel-200 bg-white p-6 sm:flex-row sm:items-center sm:p-10">
          <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center gap-1 rounded-lg bg-volt-400 p-6 sm:p-10">
            <span className="text-label-s font-medium text-steel-950">
              {summary.label}
            </span>
            <span className="font-heading text-heading font-semibold text-steel-950">
              {summary.average}
            </span>
          </div>

          <div className="flex w-full min-w-0 flex-col gap-1 sm:w-[490px]">
            {summary.bars.map((bar) => (
              <div
                key={bar.stars}
                className="flex flex-col gap-1.5 sm:h-[26px] sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="h-2 w-full shrink overflow-hidden rounded-full bg-steel-100 sm:max-w-[282px]">
                  <div
                    className="h-full rounded-full bg-volt-400"
                    style={{
                      width: `${Math.round((bar.width / summary.barWidth) * 100)}%`,
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 sm:contents">
                  <div className="flex shrink-0 gap-1">
                    <StarIcons />
                  </div>
                  <span className="w-10 shrink-0 text-right text-base text-steel-700">
                    {bar.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CourseSection>

      <CourseSection
        id="individual-heading"
        heading={reviewsContent.listHeading}
      >
        <div className="flex min-h-12 flex-wrap items-start gap-2 sm:gap-4">
          <Button size="none" className="px-4 py-3 text-label-m">
            All rating
          </Button>
          {reviewsContent.filters.map((filter) => (
            <Button
              key={filter}
              variant="chip"
              size="none"
              className="gap-1 px-4 py-3 text-label-m"
            >
              <Icon
                src={images.icons.starDark}
                alt="Star"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              {filter}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {reviewsContent.cards.map((review, index) => (
            <Reveal
              key={review.name}
              as="article"
              delay={(index % 3) * 0.08}
              className="flex flex-col gap-4 rounded-card border border-steel-200 bg-white p-5 sm:gap-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-3 sm:gap-6">
                  <div className="flex items-start gap-3">
                    <AppImage
                      src={review.avatar}
                      alt={review.name}
                      width={200}
                      height={200}
                      className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-label-l font-medium text-steel-950">
                        {review.name}
                      </span>
                      <span className="text-base leading-6 text-steel-700">
                        {review.role}
                      </span>
                    </div>
                  </div>
                  <StarRow />
                </div>
                <span className="text-base leading-6 text-steel-700">
                  {review.time}
                </span>
              </div>
              <Title
                as="p"
                variant="base"
                className="text-base text-steel-700"
              >
                {review.text}
              </Title>
            </Reveal>
          ))}
        </div>
      </CourseSection>
    </CourseLayout>
  );
}
