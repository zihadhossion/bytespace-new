import type { ReactNode } from "react";

import CourseCardContent from "@/components/course/CourseCardContent";
import AppImage from "@/components/ui/AppImage";
import GridOverlay from "@/components/ui/GridOverlay";
import Title from "@/components/ui/Title";
import { HappyStudentsCard } from "@/components/ui/StatCards";
import { getCourseById } from "@/data/courses";
import { images } from "@/lib/images";

function AuthCourseCard({
  courseId,
  position,
  delay,
}: {
  courseId: string;
  position: string;
  delay: number;
}) {
  const course = getCourseById(courseId);

  if (!course) {
    return null;
  }

  return (
    <div
      className={`absolute ${position} hidden h-[384px] w-[373px] animate-fade-up overflow-hidden rounded-card border border-steel-200 bg-white p-4 pb-[21px] lg:block`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CourseCardContent course={course} variant="auth" />
    </div>
  );
}

interface AuthShellProps {
  leftHeading: string;
  leftBody: string;
  children: ReactNode;
}

export default function AuthShell({
  leftHeading,
  leftBody,
  children,
}: AuthShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-800 text-steel-50">
      <GridOverlay />

      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-start gap-10 px-5 pt-[calc(var(--header-h)_+_24px)] pb-16 sm:px-6 md:gap-16 md:pt-[var(--header-h-lg)] lg:grid-cols-[minmax(0,621px)_minmax(0,579px)] lg:gap-0 lg:px-0">
        <div className="relative min-h-0 lg:min-h-[784px]">
          <div className="relative z-10 w-full max-w-[475px]">
            <Title
              as="p"
              variant="raw"
              className="animate-slide-up text-heading text-steel-50"
            >
              {leftHeading}
            </Title>
            <Title
              as="p"
              variant="raw"
              className="mt-4 animate-fade-up text-lg text-steel-50"
              style={{ animationDelay: "80ms" }}
            >
              {leftBody}
            </Title>
          </div>

          <AuthCourseCard
            courseId="build-digital-asset"
            position="top-[274px] left-[2px]"
            delay={160}
          />
          <AuthCourseCard
            courseId="power-of-big-data"
            position="top-[185px] left-[113px]"
            delay={240}
          />
          <HappyStudentsCard
            className="absolute top-[620px] left-[228px] z-10 hidden h-[123px] w-[258px] animate-fade-up rounded-2xl bg-volt-400 p-4 [animation-delay:320ms] lg:block"
            layout="flat"
            labelClassName="text-base leading-6 font-medium text-steel-950"
            rowClassName="flex items-center"
            valueClassName="text-[10px] leading-[15px] text-steel-800"
            starVariant="svg"
            stackClassName="mt-[9px]"
            totalVariant="steel"
          />

          <AppImage
            src={images.pages.authSquiggle}
            alt="Decorative squiggle shape"
            width={354}
            height={352}
            aria-hidden
            className="absolute top-[506px] left-[350px] z-20 hidden h-[175px] w-[175px] animate-fade-float lg:block"
            style={{ animationDelay: "240ms, 1.2s" }}
          />
          <AppImage
            src={images.pages.authTorus}
            alt="Decorative torus ring shape"
            width={296}
            height={294}
            aria-hidden
            className="absolute top-[200px] left-[31px] z-20 hidden h-[146px] w-[146px] animate-fade-float lg:block"
            style={{ animationDelay: "320ms, 2s" }}
          />
          <AppImage
            src={images.pages.authCone}
            alt="Decorative cone shape"
            width={380}
            height={378}
            aria-hidden
            className="absolute top-[582px] left-[-23px] z-20 hidden h-[188px] w-[188px] animate-fade-float lg:block"
            style={{ animationDelay: "400ms, 2.8s" }}
          />
        </div>

        <div className="relative z-10 w-full animate-fade-up rounded-card bg-white p-6 text-steel-950 sm:px-[63px] sm:pt-[61px] sm:pb-10 min-h-0 lg:min-h-[784px] [animation-delay:160ms]">
          {children}
        </div>
      </div>
    </div>
  );
}
