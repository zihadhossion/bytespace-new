import CourseCard from "@/components/course/CourseCard";
import CreatorCTA from "@/components/home/CreatorCTA";
import GrowthSection from "@/components/home/GrowthSection";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import PartnerLogos from "@/components/home/PartnerLogos";
import Testimonials from "@/components/home/Testimonials";
import CategoryTabs from "@/components/search/CategoryTabs";
import GridOverlay from "@/components/ui/GridOverlay";
import Reveal from "@/components/ui/Reveal";
import Title from "@/components/ui/Title";
import { courses } from "@/data/courses";
import { container } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="relative bg-brand-800 pt-[var(--header-h)] md:pt-[var(--header-h-lg)]">
        <GridOverlay />
        <Hero />
      </div>

      <main className="flex flex-col">
        <PartnerLogos />

        <section
          id="featured-courses"
          className={`${container} pt-12 md:pt-[72px]`}
        >
          <Reveal className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
            <Title as="h2" variant="title" className="text-ink">
              Discover Your Passion,
              <br />
              Build Your Skills
            </Title>
            <Title
              as="p"
              variant="raw"
              className="max-w-[917px] text-lg text-steel-400"
            >
              At Bytespace Courses, we bring you closer to life-changing
              knowledge. Explore a variety of courses across different fields,
              from technology to the arts, and make a difference in your career
              and life.
            </Title>
          </Reveal>

          <Reveal className="mt-8 md:mt-[42px]" delay={0.1}>
            <CategoryTabs
              active="Featured"
              hrefFor={(tab) =>
                tab === "Featured"
                  ? "/courses"
                  : `/courses?${new URLSearchParams({ category: tab })}`
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-[77px] lg:grid-cols-3">
            {courses.map((course, index) => (
              <Reveal key={course.id} delay={(index % 3) * 0.08}>
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </section>

        <LearningPaths />
        <Reveal>
          <GrowthSection />
        </Reveal>
        <Reveal>
          <CreatorCTA />
        </Reveal>
        <Testimonials />
      </main>
    </>
  );
}
