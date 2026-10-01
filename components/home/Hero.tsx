import Form from "next/form";
import AppImage from "@/components/ui/AppImage";
import AvatarStack from "@/components/ui/AvatarStack";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { stackAvatars } from "@/data/avatars";
import { images } from "@/lib/images";

interface HeroProps {
  className?: string;
}

export default function Hero({ className = "" }: HeroProps) {
  return (
    <section
      id="hero"
      className={`relative overflow-hidden text-white ${className}`}
      aria-label="Hero"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 z-[1] hidden h-full w-[1440px] -translate-x-1/2 xl:block"
      >
        <div className="absolute top-[462px] left-[145px] h-[1149px] w-[1149px] rounded-full border-[320px] border-volt-500" />

        <AppImage
          src={images.hero.person}
          alt="Smiling student wearing headphones and holding a laptop"
          width={1444}
          height={1378}
          className="absolute top-[392px] left-[431px] w-[722px] max-w-none"
        />

        <div className="absolute top-[531px] left-[842px] w-[232px] rounded-2xl bg-white p-4 text-steel-950">
          <Title as="p" variant="raw" className="text-label-s font-medium">
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
            <div className="h-full w-[56%] rounded-full bg-volt-400" />
          </div>
        </div>

        <div className="absolute top-[717px] left-[328px] w-[258px] rounded-2xl bg-white p-4 text-steel-950">
          <div className="flex flex-col gap-2">
            <div>
              <Title
                as="p"
                variant="raw"
                className="text-label-m font-medium"
              >
                Happy Students
              </Title>
              <div className="flex items-center gap-0">
                <span className="text-xs text-steel-950">4.5 (240)</span>
                <Icon src={images.icons.starSm} alt="Star" className="h-4 w-4" />
              </div>
            </div>
            <AvatarStack avatars={stackAvatars} total="2K+" size="md" />
          </div>
        </div>

        <AppImage
          src={images.hero.ornaments.springLime}
          alt="Lime green spiral spring decoration"
          width={505}
          height={537}
          aria-hidden
          className="absolute top-[165px] left-[-56px] w-[252.5px] max-w-none"
        />

        <AppImage
          src={images.hero.ornaments.squiggleSm}
          alt="Small squiggle decoration"
          width={230}
          height={244}
          aria-hidden
          className="absolute top-[386px] left-[218px] w-[115px] max-w-none"
        />

        <AppImage
          src={images.hero.ornaments.donutWhite}
          alt="White donut ring decoration"
          width={477}
          height={437}
          aria-hidden
          className="absolute top-[621px] left-[69px] w-[238.5px] max-w-none"
        />

        <AppImage
          src={images.hero.ornaments.coneWhite}
          alt="White cone decoration"
          width={250}
          height={275}
          aria-hidden
          className="absolute top-[366px] left-[1133px] w-[125px] max-w-none"
        />

        <AppImage
          src={images.hero.ornaments.squiggleLg}
          alt="Large squiggle decoration"
          width={382}
          height={500}
          aria-hidden
          className="absolute top-[590px] left-[1198px] w-[191px] max-w-none"
        />

        <AppImage
          src={images.hero.ornaments.cylinderLime}
          alt="Lime green cylinder decoration"
          width={548}
          height={599}
          aria-hidden
          className="absolute top-[136px] left-[1278px] w-[274px] max-w-none"
        />

        <div className="absolute top-[519px] left-[404px] w-[208px] rounded-2xl bg-white p-4 text-steel-950">
          <Title as="p" variant="raw" className="text-base leading-[1.2] font-medium">
            UI/UX Design
          </Title>
          <div className="flex items-center gap-2">
            <span className="text-xs text-steel-400">200 Courses</span>
            <span className="text-[10px] leading-[1.5] text-steel-400">•</span>
            <span className="text-xs text-steel-400">1000+ Students</span>
          </div>
        </div>
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-page flex-col items-center px-5 pt-[49px] pb-16 text-center sm:px-6 md:px-0 xl:min-h-[904px] xl:pb-0">
        <Title
          as="h1"
          variant="display"
          className="max-w-[935px] text-display text-white"
        >
          Get Access to Hundreds Courses Available
        </Title>

        <Title as="p" variant="raw" className="mt-8 text-lg text-steel-100">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </Title>

        <Form
          action="/courses"
          role="search"
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-[60px] sm:flex-row sm:items-start sm:gap-4"
        >
          <div className="mx-auto flex h-[52px] w-full max-w-[461px] items-center gap-2 rounded-[24px] bg-white px-6 sm:mx-0">
            <Button
              type="submit"
              variant="ghost"
              size="none"
              aria-label="Search courses"
              className="-mx-2 h-10 w-10 shrink-0"
            >
              <Icon src={images.icons.search} alt="Search" className="h-6 w-6" />
            </Button>
            <input
              type="search"
              name="q"
              placeholder="Course, topic, creator"
              aria-label="Course, topic, creator"
              className="h-full min-w-0 flex-1 bg-transparent text-lg text-steel-950 placeholder:text-steel-400 focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="mx-auto w-full max-w-[461px] shrink-0 sm:mx-0 sm:w-auto sm:max-w-none"
          >
            Search
          </Button>
        </Form>

        <AppImage
          src={images.hero.person}
          alt="Smiling student wearing headphones and holding a laptop"
          width={1444}
          height={1378}
          className="mt-12 w-full max-w-[578px] xl:hidden"
        />
      </div>
    </section>
  );
}
