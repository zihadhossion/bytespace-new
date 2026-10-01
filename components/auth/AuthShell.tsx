import type { ReactNode } from "react";

import AppImage from "@/components/ui/AppImage";
import GridOverlay from "@/components/ui/GridOverlay";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { cardAvatars, stackAvatars } from "@/data/avatars";
import { images } from "@/lib/images";

function AuthCourseCard({
  image,
  title,
  position,
}: {
  image: string;
  title: string;
  position: string;
}) {
  return (
    <div
      className={`absolute ${position} hidden h-[384px] w-[373px] overflow-hidden rounded-card border border-steel-200 bg-white p-4 pb-[21px] lg:block`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <AppImage
          src={image}
          alt={title}
          width={682}
          height={454}
          className="aspect-[341/195] w-full object-cover"
        />
        <div className="absolute bottom-[13px] left-3 flex gap-3">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((chip) => (
            <span
              key={chip}
              className="flex h-8 items-center rounded-full bg-[#f6f6f6]/60 px-3 text-xs leading-5 font-medium text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="flex flex-col">
            <Title
              as="h3"
              variant="subheading"
              className="truncate font-heading text-subheading leading-[28px] font-semibold text-black"
            >
              {title}
            </Title>
            <Title
              as="p"
              variant="raw"
              className="text-xs leading-5 text-muted"
            >
              by <span className="text-brand-800">purepearl studio</span>
            </Title>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-full bg-steel-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-steel-700">
              <Icon src={images.icons.level} alt="Level" className="h-5 w-5" />
              Beginner
            </span>
            <div className="flex -space-x-2">
              {cardAvatars.map((avatar, index) => (
                <AppImage
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={200}
                  height={200}
                  className="h-8 w-8 shrink-0 rounded-full object-cover"
                />
              ))}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-xs font-medium text-white">
                26+
              </span>
            </div>
          </div>

          <Title as="p" variant="raw" className="flex items-end">
            <span className="font-heading text-subheading leading-[28px] font-semibold text-brand-800">
              $25
            </span>
            <span className="text-xs leading-5 text-muted">/lifetime</span>
          </Title>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <span className="text-lg text-muted">4.5</span>
          <Icon src={images.icons.starLime} alt="Star" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

function HappyStudentsCard() {
  return (
    <div className="absolute top-[620px] left-[228px] z-10 hidden h-[123px] w-[258px] rounded-2xl bg-volt-400 p-4 lg:block">
      <Title
        as="p"
        variant="raw"
        className="text-base leading-6 font-medium text-steel-950"
      >
        Happy Students
      </Title>
      <div className="flex items-center">
        <span className="text-[10px] leading-[15px] text-steel-800">
          4.5 (240)
        </span>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
          <path
            d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.5l-3.52 1.85.67-3.93L2.3 5.64l3.94-.57L8 1.5z"
            fill="#003be2"
          />
        </svg>
      </div>
      <div className="mt-[9px] flex -space-x-4">
        {stackAvatars.map((avatar, index) => (
          <AppImage
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            width={200}
            height={200}
            className="h-[43px] w-[43px] shrink-0 rounded-full border-2 border-white object-cover"
          />
        ))}
        <span className="flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full border-2 border-white bg-steel-950 text-xs font-bold text-steel-50">
          2K+
        </span>
      </div>
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

      <div className="mx-auto grid w-full max-w-page grid-cols-1 items-start gap-10 px-5 pt-[96px] pb-16 sm:px-6 md:gap-16 md:pt-[120px] lg:grid-cols-[minmax(0,621px)_minmax(0,579px)] lg:gap-0 lg:px-0">
        <div className="relative min-h-0 lg:min-h-[784px]">
          <div className="relative z-10 w-full max-w-[475px]">
            <Title
              as="p"
              variant="raw"
              className="text-heading text-steel-50"
            >
              {leftHeading}
            </Title>
            <Title as="p" variant="raw" className="mt-4 text-lg text-steel-50">
              {leftBody}
            </Title>
          </div>

          <AuthCourseCard
            image={images.courses.buildDigitalAsset}
            title="Build Digital Asset"
            position="top-[274px] left-[2px]"
          />
          <AuthCourseCard
            image={images.courses.powerOfBigData}
            title="the Power of Big Data"
            position="top-[185px] left-[113px]"
          />
          <HappyStudentsCard />

          <AppImage
            src={images.pages.authSquiggle}
            alt="Decorative squiggle shape"
            width={354}
            height={352}
            aria-hidden
            className="absolute top-[506px] left-[350px] z-20 hidden h-[175px] w-[175px] lg:block"
          />
          <AppImage
            src={images.pages.authTorus}
            alt="Decorative torus ring shape"
            width={296}
            height={294}
            aria-hidden
            className="absolute top-[200px] left-[31px] z-20 hidden h-[146px] w-[146px] lg:block"
          />
          <AppImage
            src={images.pages.authCone}
            alt="Decorative cone shape"
            width={380}
            height={378}
            aria-hidden
            className="absolute top-[582px] left-[-23px] z-20 hidden h-[188px] w-[188px] lg:block"
          />
        </div>

        <div className="relative z-10 w-full rounded-card bg-white p-6 text-steel-950 sm:px-[63px] sm:pt-[61px] sm:pb-10 min-h-0 lg:min-h-[784px]">
          {children}
        </div>
      </div>
    </div>
  );
}
