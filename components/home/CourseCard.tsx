import Link from "next/link";

import AppImage from "@/components/ui/AppImage";
import AvatarStack from "@/components/ui/AvatarStack";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { cardAvatars } from "@/data/avatars";
import type { Course } from "@/data/courses";
import { images } from "@/lib/images";

interface CourseCardProps {
  course: Course;
  variant?: "home" | "growth" | "grid" | "auth";
}

export default function CourseCard({
  course,
  variant = "home",
}: CourseCardProps) {
  const isGrowth = variant === "growth";
  const isAuth = variant === "auth";
  const showMeta = variant === "grid" || isAuth;
  const darkBadge = isGrowth || isAuth;

  const metaChips = (
    <div
      className={`absolute left-3 flex gap-3 ${
        isAuth ? "bottom-[13px]" : "bottom-[19px]"
      }`}
    >
      {[course.lessons, course.duration, course.comments].map((chip) => (
        <span
          key={chip}
          className={`flex items-center rounded-full bg-[#f6f6f6]/60 px-3 font-medium text-muted ${
            isAuth ? "h-8 text-xs leading-5" : "h-[26px] text-xs leading-[14px]"
          }`}
        >
          {chip}
        </span>
      ))}
    </div>
  );

  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block min-w-0 cursor-pointer"
    >
      <article className="rounded-card border border-steel-200 bg-white p-4 pb-[21px] transition group-hover:border-steel-300 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
        <div className="relative overflow-hidden rounded-xl">
          <AppImage
            src={course.image}
            alt={course.title}
            width={682}
            height={454}
            className="aspect-[341/195] w-full object-cover"
          />
          {showMeta ? metaChips : null}
        </div>

        <div className="mt-[21px] flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="flex flex-col">
              <Title
                as="h3"
                variant="subheading"
                className={`truncate font-heading text-subheading font-semibold text-black ${
                  isGrowth || isAuth ? "leading-[28px]" : ""
                }`}
              >
                {course.title}
              </Title>
              <Title as="p" variant="raw" className="text-xs text-muted">
                by <span className="text-brand-800">{course.author}</span>
              </Title>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="flex items-center gap-1 rounded-full bg-steel-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-steel-700">
                <Icon src={images.icons.level} className="h-5 w-5" />
                {course.level}
              </span>
              <AvatarStack
                avatars={cardAvatars}
                total={`${course.students}+`}
                size="sm"
                totalVariant={darkBadge ? "dark" : "lime"}
              />
            </div>

            <Title as="p" variant="raw" className="flex items-end">
              <span
                className={`font-heading text-subheading font-semibold ${
                  isGrowth || isAuth ? "leading-[28px] " : ""
                }${isGrowth ? "text-[#300b6a]" : "text-brand-800"}`}
              >
                {course.price}
              </span>
              <span className="text-xs leading-5 text-muted">/lifetime</span>
            </Title>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <span className="text-lg text-muted">{course.rating}</span>
            <Icon
              src={
                isGrowth || isAuth
                  ? images.icons.starLime
                  : images.icons.star
              }
              className="h-6 w-6"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
