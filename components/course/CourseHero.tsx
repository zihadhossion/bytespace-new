import ShareButton from "@/components/course/ShareButton";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import type { Course } from "@/data/courses";
import { images } from "@/lib/images";

function PlayIcon() {
  return (
    <Icon src={images.icons.playIcon} alt="Play" className="h-[72px] w-[72px]" />
  );
}

interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  const reviewCount = course.comments.replace(/\s*Comments?/, "");
  const pills = [
    { icon: images.icons.heroLevel, label: course.level, alt: "Level" },
    {
      icon: images.icons.heroStar,
      label: `${course.rating} (${reviewCount} reviews)`,
      alt: "Star",
    },
    {
      icon: images.icons.heroUsers,
      label: `${course.students} Students`,
      alt: "Students",
    },
  ];

  return (
    <section
      aria-label="Course hero"
      className="relative overflow-hidden bg-brand-800 text-white"
    >
      <GridOverlay />

      <div className="mx-auto w-full max-w-page px-5 pt-[172px] pb-[30px] sm:px-6 md:px-0">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col">
            <Title
              as="h1"
              variant="heading"
              className="max-w-[769px] font-heading text-heading font-semibold text-steel-50"
            >
              {course.title}
            </Title>
            {course.subtitle ? (
              <Title
                as="h2"
                variant="subheading"
                className="mt-2 max-w-[571px] font-heading text-subheading font-semibold text-steel-50"
              >
                {course.subtitle}
              </Title>
            ) : null}
            <Title
              as="p"
              variant="raw"
              className="mt-6 text-label-l font-medium text-[#f1f4fe]"
            >
              by {course.author}
            </Title>

            <div className="mt-6 flex flex-wrap gap-4">
              {pills.map((pill) => (
                <span
                  key={pill.label}
                  className="flex h-10 items-center gap-2 rounded-full bg-white px-6 py-2"
                >
                  <Icon src={pill.icon} alt={pill.alt} className="h-6 w-6 shrink-0" />
                  <span className="text-label-m font-medium text-steel-950">
                    {pill.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <ShareButton />
        </div>

        <div className="relative mt-6 aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-card">
          <AppImage
            src={course.image}
            alt={course.title}
            fill
            preload
            sizes="(max-width: 720px) 100vw, 720px"
            className="object-cover"
          />
          <Button
            variant="ghost"
            size="none"
            aria-label="Play course preview"
            className="absolute top-1/2 left-1/2 h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 rounded-card border border-[#4f4f4f] bg-[rgba(61,61,61,0.24)] p-4 hover:bg-[rgba(61,61,61,0.4)]"
          >
            <PlayIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
