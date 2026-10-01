import AppImage from "@/components/ui/AppImage";
import AvatarStack from "@/components/ui/AvatarStack";
import Icon from "@/components/ui/Icon";
import MetaChip from "@/components/ui/MetaChip";
import Title from "@/components/ui/Title";
import { cardAvatars } from "@/data/avatars";
import type { Course } from "@/data/courses";
import { images } from "@/lib/images";

export type CourseCardVariant = "home" | "growth" | "grid" | "auth";

interface CourseCardContentProps {
  course: Course;
  variant?: CourseCardVariant;
}

export default function CourseCardContent({
  course,
  variant = "home",
}: CourseCardContentProps) {
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
    <>
      <div className="relative overflow-hidden rounded-xl">
        <AppImage
          src={course.image}
          alt={course.title}
          width={682}
          height={454}
          className={
            isAuth
              ? "aspect-[341/195] w-full object-cover"
              : "aspect-[341/195] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          }
        />
        {showMeta ? metaChips : null}
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col">
            <Title
              as="h3"
              variant="subheading"
              className={`truncate text-black ${
                isGrowth || isAuth ? "leading-[28px]" : ""
              }`}
            >
              {course.title}
            </Title>
            <Title
              as="p"
              variant="raw"
              className={isAuth ? "text-xs leading-5 text-muted" : "text-xs text-muted"}
            >
              by <span className="text-brand-800">{course.author}</span>
            </Title>
          </div>

          <div
            className={
              isAuth
                ? "flex items-center gap-3"
                : "flex flex-wrap items-center gap-x-3 gap-y-2"
            }
          >
            <MetaChip icon={images.icons.level} iconAlt="Level">
              {course.level}
            </MetaChip>
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
            src={isGrowth || isAuth ? images.icons.starLime : images.icons.star}
            alt="Star"
            className="h-6 w-6"
          />
        </div>
      </div>
    </>
  );
}
