import CategoryTabs from "@/components/home/CategoryTabs";
import CourseCard from "@/components/home/CourseCard";
import CreatorCTA from "@/components/home/CreatorCTA";
import GrowthSection from "@/components/home/GrowthSection";
import Hero from "@/components/home/Hero";
import LearningPaths from "@/components/home/LearningPaths";
import PartnerLogos from "@/components/home/PartnerLogos";
import Testimonials from "@/components/home/Testimonials";
import GridOverlay from "@/components/ui/GridOverlay";
import Title from "@/components/ui/Title";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <>
      <div className="relative bg-brand-800 pt-[72px] md:pt-[120px]">
        <GridOverlay />
        <Hero />
      </div>

      <main className="flex flex-col">
        <PartnerLogos />

        <section
          id="featured-courses"
          className="mx-auto w-full max-w-page px-6 pt-12 md:pt-[72px] lg:px-10"
        >
          <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
            <Title as="h2" variant="title" className="text-title text-ink">
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
          </div>

          <CategoryTabs className="mt-8 md:mt-[42px]" />

          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-[77px] lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <LearningPaths />
        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>
    </>
  );
}
