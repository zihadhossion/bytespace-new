import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";

import { enrollCard } from "@/data/course-content";
import type { Course } from "@/data/courses";
import { creators } from "@/data/creator";

interface EnrollCardProps {
  course: Course;
}

export default function EnrollCard({ course }: EnrollCardProps) {
  const lessonCount = Number.parseInt(course.lessons, 10) || 0;
  const lessonsSummary = `${course.lessons} (${course.duration})`;
  const moreVideos = `${Math.max(lessonCount - enrollCard.lessons.length, 0)} more videos`;
  const creator =
    creators.find((item) => item.courseIds.includes(course.id)) ?? null;
  const creatorProfile = {
    name: creator?.name ?? course.author,
    role: creator?.role ?? "Creator",
    avatar: creator?.avatar ?? enrollCard.creatorAvatar,
  };

  return (
    <aside
      aria-label="Enroll in this course"
      className="flex w-full flex-col gap-6 rounded-card border border-steel-200 bg-white p-6 sm:p-10"
    >
      <div className="flex flex-col gap-6">
        <Title
          as="p"
          variant="subheading"
        >
          {lessonsSummary}
        </Title>

        <div className="flex flex-col gap-3">
          {enrollCard.lessons.map((lesson) => (
            <div
              key={lesson.no}
              className="flex items-start justify-between"
            >
              <div className="flex gap-2">
                <span className="w-6 shrink-0 text-label-m font-medium text-steel-950">
                  {lesson.no}
                </span>
                <span className="text-label-m leading-[19.2px] font-medium text-steel-950">
                  {lesson.title}
                </span>
              </div>
              <span className="shrink-0 text-base text-brand-800">
                {lesson.mins}
              </span>
            </div>
          ))}
          <Title as="p" variant="base" className="text-base text-steel-700">{moreVideos}</Title>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Title as="p" variant="base" className="text-base text-steel-700">
          {enrollCard.blurb}
        </Title>
        <Title as="p" variant="raw" className="flex items-baseline">
          <span className="font-heading text-heading font-semibold text-brand-800">
            {course.price}
          </span>
          <span className="text-base text-steel-700">/lifetime</span>
        </Title>
        <Button className="w-full text-label-l">Enroll Now</Button>
      </div>

      <Title
        as="p"
        variant="subheading"
      >
        This course include
      </Title>

      <ul className="flex flex-col gap-3">
        {enrollCard.includes.map((item) => (
          <li key={item.label} className="flex h-[26px] items-center gap-2">
            <Icon src={item.icon} alt="Course feature" className="h-6 w-6 shrink-0" />
            <span className="text-base text-steel-700">{item.label}</span>
          </li>
        ))}
      </ul>

      <div aria-hidden className="h-px w-full bg-[#d1d1d1]" />

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <AppImage
            src={creatorProfile.avatar}
            alt={creatorProfile.name}
            width={104}
            height={104}
            className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-label-l font-medium text-steel-950">
              {creatorProfile.name}
            </span>
            <span className="text-base text-steel-700">
              {creatorProfile.role}
            </span>
          </div>
        </div>
        {creator ? (
          <Button
            href={`/creators/${creator.slug}`}
            variant="outline"
            size="none"
            className="h-[35px] w-fit px-4 py-2 text-label-m text-steel-700"
          >
            See Full Profile
          </Button>
        ) : null}
      </div>
    </aside>
  );
}
