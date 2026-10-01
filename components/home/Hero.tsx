import Form from "next/form";
import SearchPill from "@/components/search/SearchPill";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import FloatOrnament, {
  type OrnamentConfig,
} from "@/components/ui/FloatOrnament";
import Title from "@/components/ui/Title";
import { HappyStudentsCard, LearningProgressCard } from "@/components/ui/StatCards";
import { images } from "@/lib/images";
import { container, inputBase } from "@/lib/utils";

const heroOrnaments: OrnamentConfig[] = [
  {
    src: images.hero.ornaments.springLime,
    alt: "Lime green spiral spring decoration",
    width: 505,
    height: 537,
    className:
      "absolute top-[165px] left-[-56px] w-[252.5px] max-w-none animate-float",
    delay: "0s",
  },
  {
    src: images.hero.ornaments.squiggleSm,
    alt: "Small squiggle decoration",
    width: 230,
    height: 244,
    className:
      "absolute top-[386px] left-[218px] w-[115px] max-w-none animate-float",
    delay: "0.8s",
  },
  {
    src: images.hero.ornaments.donutWhite,
    alt: "White donut ring decoration",
    width: 477,
    height: 437,
    className:
      "absolute top-[621px] left-[69px] w-[238.5px] max-w-none animate-float",
    delay: "1.6s",
  },
  {
    src: images.hero.ornaments.coneWhite,
    alt: "White cone decoration",
    width: 250,
    height: 275,
    className:
      "absolute top-[366px] left-[1133px] w-[125px] max-w-none animate-float",
    delay: "2.4s",
  },
  {
    src: images.hero.ornaments.squiggleLg,
    alt: "Large squiggle decoration",
    width: 382,
    height: 500,
    className:
      "absolute top-[590px] left-[1198px] w-[191px] max-w-none animate-float",
    delay: "3.2s",
  },
  {
    src: images.hero.ornaments.cylinderLime,
    alt: "Lime green cylinder decoration",
    width: 548,
    height: 599,
    className:
      "absolute top-[136px] left-[1278px] w-[274px] max-w-none animate-float",
    delay: "4s",
  },
];

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

        <LearningProgressCard
          className="absolute top-[531px] left-[842px] w-[232px] rounded-2xl bg-white p-4 text-steel-950"
          labelClassName="text-label-s font-medium"
          barClassName="progress-fill"
        />

        <HappyStudentsCard
          className="absolute top-[717px] left-[328px] w-[258px] rounded-2xl bg-white p-4 text-steel-950"
          labelClassName="text-label-m font-medium"
          rowClassName="flex items-center gap-0"
          valueClassName="text-xs text-steel-950"
        />

        {heroOrnaments.map((ornament) => (
          <FloatOrnament key={ornament.src} {...ornament} />
        ))}

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

      <div className={`relative z-[2] ${container} flex flex-col items-center pt-[49px] pb-16 text-center xl:min-h-[904px] xl:pb-0`}>
        <Title
          as="h1"
          variant="display"
          className="max-w-[935px] animate-slide-up text-white"
        >
          Get Access to Hundreds Courses Available
        </Title>

        <Title
          as="p"
          variant="raw"
          className="mt-8 animate-fade-up text-lg text-steel-100"
          style={{ animationDelay: "80ms" }}
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </Title>

        <Form
          action="/courses"
          role="search"
          className="mt-10 flex w-full animate-fade-up flex-col items-stretch justify-center gap-3 sm:mt-[60px] sm:flex-row sm:items-start sm:gap-4"
          style={{ animationDelay: "160ms" }}
        >
          <SearchPill
            className="mx-auto flex h-[52px] w-full max-w-[461px] items-center gap-2 rounded-[24px] bg-white px-6 sm:mx-0"
            buttonClassName="-mx-2 h-10 w-10 shrink-0"
            inputClassName={`h-full min-w-0 flex-1 bg-transparent ${inputBase}`}
            icon={images.icons.search}
            buttonAriaLabel="Search courses"
            inputAriaLabel="Course, topic, creator"
            placeholder="Course, topic, creator"
          />
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
          className="mt-12 w-full max-w-[578px] animate-fade-up xl:hidden"
          style={{ animationDelay: "240ms" }}
        />
      </div>
    </section>
  );
}
