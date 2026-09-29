import CategoryTabs from "@/components/home/CategoryTabs";
import CourseCard from "@/components/home/CourseCard";
import CreatorCTA from "@/components/home/CreatorCTA";
import GrowthSection from "@/components/home/GrowthSection";
import Hero from "@/components/home/Hero";
import PartnerLogos from "@/components/home/PartnerLogos";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { courses } from "@/data/courses";

export default function Home() {
  return (
    <>
      <div className="bg-brand-800">
        <Header tone="dark" />
        <Hero />
      </div>

      <main className="flex flex-col">
        <PartnerLogos />

        <section id="featured-courses" className="mx-auto w-full max-w-page px-6 py-20 lg:px-10">
          <CategoryTabs />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
