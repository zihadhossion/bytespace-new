import AppImage from "@/components/ui/AppImage";
import AvatarStack from "@/components/ui/AvatarStack";
import CountUp from "@/components/ui/CountUp";
import Glow from "@/components/ui/Glow";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { creatorBenefits, platformStats } from "@/data/categories";
import { stackAvatars } from "@/data/avatars";
import { courses } from "@/data/courses";

import CourseCard from "./CourseCard";
import { images } from "@/lib/images";

interface GrowthSectionProps {
  className?: string;
}

function LearningProgressCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-[232px] rounded-2xl bg-white p-4 text-steel-950 ${className}`}
    >
      <Title as="p" variant="raw" className="text-sm leading-[24px] font-medium">
        Learning Progress
      </Title>
      <Title
        as="p"
        variant="raw"
        className="mt-2 font-heading text-[48px] leading-[1.2] font-semibold tracking-[-0.01em]"
      >
        55%
      </Title>
      <div className="mt-2 h-2 w-full rounded-full bg-[#f6f6f6]">
        <div className="progress-scroll h-full w-[56%] rounded-full bg-volt-400" />
      </div>
    </div>
  );
}

function HappyStudentsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-[258px] rounded-2xl bg-white p-4 text-steel-950 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <div>
          <Title
            as="p"
            variant="raw"
            className="text-base leading-[24px] font-medium"
          >
            Happy Students
          </Title>
          <div className="flex items-center gap-1">
            <span className="text-[10px] leading-[15px] text-steel-400">
              4.5 (240)
            </span>
            <Icon src={images.icons.starSm} alt="Star" className="h-4 w-4" />
          </div>
        </div>
        <AvatarStack avatars={stackAvatars} total="2K+" size="md" />
      </div>
    </div>
  );
}

export default function GrowthSection({ className = "" }: GrowthSectionProps) {
  return (
    <section
      id="growth"
      className={`relative overflow-hidden bg-soft ${className}`}
      aria-label="Your path to professional growth"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2">
          <Glow color="volt" className="glow-parallax top-[-466px] left-[-152px] h-[1137px] w-[1137px]" />
          <Glow color="brand" className="glow-parallax top-[-458px] left-[811px] h-[1137px] w-[1137px]" />
          <Glow color="brand" className="glow-parallax top-[183px] left-[-508px] h-[1137px] w-[1137px]" />
          <Glow color="brand" className="glow-parallax top-[788px] left-[722px] h-[1137px] w-[1137px]" />
          <Glow color="volt" className="glow-parallax top-[946px] left-[-287px] h-[672px] w-[672px]" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-page px-5 py-16 sm:px-6 md:px-0 md:py-[120px]">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[63px]">
          <div className="flex w-full max-w-[574px] shrink-0 flex-col gap-10">
            <Title as="h2" variant="title" className="text-title text-steel-950">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </Title>
            <Title
              as="p"
              variant="lg"
              className="max-w-[477px] text-lg text-steel-700"
            >
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </Title>
            <div className="flex flex-wrap gap-6 md:flex-nowrap md:gap-14">
              {platformStats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading text-[36px] leading-[44px] font-medium tracking-[-0.01em] text-brand-800">
                    <CountUp value={stat.value} />
                  </span>
                  <span className="text-lg text-steel-700">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[552px] w-[621px] shrink-0 self-center md:block lg:self-auto">
            <div className="absolute top-0 left-0 z-10 w-[373px]">
              {courses[0] ? (
                <CourseCard course={courses[0]} variant="growth" />
              ) : null}
            </div>
            <AppImage
              src={images.growth.guy}
              alt="Smiling student wearing headphones and holding a laptop"
              width={1442}
              height={1376}
              className="absolute top-[12px] left-[-21px] z-20 w-[721px] max-w-none"
            />
            <LearningProgressCard className="absolute top-[213px] left-[345px] z-30" />
            <AppImage
              src={images.growth.squiggleA}
              alt="Decorative squiggle shape"
              width={434}
              height={432}
              aria-hidden
              className="absolute top-[67px] left-[406px] z-40 w-[215px]"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-10 md:mt-[72px] lg:flex-row lg:items-center lg:gap-[79px]">
          <div className="relative hidden h-[596px] w-[541px] shrink-0 self-center md:block lg:self-auto">
            <div className="absolute top-[44px] left-0 z-10 flex w-[232px] flex-col gap-2 rounded-2xl bg-brand-800 p-4 text-steel-50">
              <div>
                <Title
                  as="p"
                  variant="raw"
                  className="text-base leading-[1.2] font-medium"
                >
                  Total Revenue
                </Title>
                <Title as="p" variant="raw" className="text-[10px] leading-3">
                  July 1-28
                </Title>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading text-[24px] leading-8 font-semibold tracking-[-0.01em]">
                  $120.29
                </span>
                <span className="rounded-full bg-volt-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-steel-950">
                  +12$
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-white">
                <div className="progress-scroll h-full w-[56%] rounded-full bg-volt-400" />
              </div>
            </div>

            <div className="absolute top-[194px] left-0 z-10 flex w-[134px] flex-col gap-2 rounded-2xl bg-brand-800 p-4 text-steel-50">
              <div>
                <Title
                  as="p"
                  variant="raw"
                  className="text-base leading-[1.2] font-medium"
                >
                  Year to Date
                </Title>
                <Title as="p" variant="raw" className="text-[10px] leading-3">
                  2023
                </Title>
              </div>
              <span className="font-heading text-[24px] leading-8 font-semibold tracking-[-0.01em]">
                $1,200.38
              </span>
              <span className="w-fit rounded-full bg-volt-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-steel-950">
                +12$
              </span>
            </div>

            <AppImage
              src={images.growth.woman}
              alt="Smiling student wearing a headset and holding a tablet"
              width={1158}
              height={1488}
              className="absolute top-0 left-[7px] z-20 w-[579px] max-w-none"
            />
            <HappyStudentsCard className="absolute top-[413px] left-[283px] z-30" />
            <AppImage
              src={images.growth.squiggleB}
              alt="Decorative squiggle shape"
              width={434}
              height={432}
              aria-hidden
              className="absolute top-[114px] left-[305px] z-40 w-[215px]"
            />
          </div>

          <div className="flex w-full max-w-[580px] shrink-0 flex-col gap-10">
            <Title as="h2" variant="title" className="text-title text-steel-950">
              Create &amp; Manage
              <br />
              Courses Easily.
            </Title>
            <Title
              as="p"
              variant="lg"
              className="max-w-[574px] text-lg text-steel-700"
            >
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </Title>
            <ul className="flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2">
                  <Icon
                    src={images.icons.check}
                    alt="Checkmark"
                    className="h-6 w-6 shrink-0"
                  />
                  <span className="text-lg leading-[1.2] font-medium text-steel-950">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
