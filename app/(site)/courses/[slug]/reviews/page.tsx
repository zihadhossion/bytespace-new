import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseLayout from "@/components/course/CourseLayout";
import CourseSection from "@/components/course/CourseSection";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { allCourses, getCourseById } from "@/data/courses";
import { reviewsContent } from "@/data/reviews";
import { images } from "@/lib/images";

interface CourseReviewsPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allCourses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: CourseReviewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseById(slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return {
    title: `${course.title} — Reviews`,
    description: `Read learner reviews and ratings for ${course.title} on ByteSpace.`,
  };
}

function StarIcons() {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <Icon
          key={index}
          src={images.icons.starDark}
          className="h-6 w-6"
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

export default async function CourseReviewsPage({
  params,
}: CourseReviewsPageProps) {
  const { slug } = await params;
  const course = getCourseById(slug);

  if (!course) {
    notFound();
  }

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
              <div key={bar.stars} className="flex h-[26px] items-center gap-4">
                <div className="h-2 w-full max-w-[282px] shrink overflow-hidden rounded-full bg-steel-100">
                  <div
                    className="h-full rounded-full bg-volt-400"
                    style={{
                      width: `${Math.round((bar.width / summary.barWidth) * 100)}%`,
                    }}
                  />
                </div>
                <div className="flex shrink-0 gap-1">
                  <StarIcons />
                </div>
                <span className="w-10 shrink-0 text-right text-base text-steel-700">
                  {bar.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CourseSection>

      <CourseSection
        id="individual-heading"
        heading={reviewsContent.listHeading}
      >
        <div className="flex min-h-12 flex-wrap items-start gap-4">
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
                className="h-6 w-6"
              />
              {filter}
            </Button>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {reviewsContent.cards.map((review, index) => (
            <article
              key={review.name}
              className="flex flex-col gap-6 rounded-card border border-steel-200 bg-white p-10"
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-6">
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
                className={`text-base text-steel-700 ${
                  index === 0 ? "leading-6" : ""
                }`}
              >
                {review.text}
              </Title>
            </article>
          ))}
        </div>
      </CourseSection>
    </CourseLayout>
  );
}
