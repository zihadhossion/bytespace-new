import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CourseCard from "@/components/home/CourseCard";
import FilterBar from "@/components/search/FilterBar";
import AppImage from "@/components/ui/AppImage";
import Button from "@/components/ui/Button";
import GridOverlay from "@/components/ui/GridOverlay";
import Title from "@/components/ui/Title";
import { creators, getCreator } from "@/data/creator";
import { allCourses } from "@/data/courses";
import {
  type SearchParams,
  filterCourses,
  parseCourseQuery,
  sortCourses,
  uniqueCategories,
} from "@/lib/catalog";

interface CreatorPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
}

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({
  params,
}: CreatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);

  if (!creator) {
    return { title: "Creator Not Found" };
  }

  return {
    title: `${creator.name} — Creator Profile`,
    description: `Explore courses by ${creator.name} on ByteSpace.`,
  };
}

export default async function CreatorProfilePage({
  params,
  searchParams,
}: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreator(slug);

  if (!creator) {
    notFound();
  }

  const query = parseCourseQuery(await searchParams);
  const ownCourses = allCourses.filter((course) =>
    creator.courseIds.includes(course.id),
  );
  const categories = uniqueCategories(ownCourses);
  const visibleCourses = sortCourses(
    filterCourses(ownCourses, query),
    query.sort,
  );

  return (
    <>
      <section
        aria-label="Creator profile"
        className="relative min-h-[592px] overflow-hidden bg-brand-800"
      >
        <GridOverlay />

        <div className="mx-auto flex w-full max-w-page flex-col gap-10 px-6 pt-[172px] pb-[64px] lg:px-10">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-6">
              <AppImage
                src={creator.avatar}
                alt={creator.name}
                width={200}
                height={200}
                className="h-24 w-24 shrink-0 rounded-3xl object-cover"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Title
                    as="h1"
                    variant="heading"
                    className="font-heading text-heading font-semibold text-steel-50"
                  >
                    {creator.name}
                  </Title>
                  <span className="rounded-full bg-volt-400 px-6 py-2 text-label-m font-medium text-steel-950">
                    {creator.badge}
                  </span>
                </div>
                <Title as="p" variant="raw" className="text-lg text-steel-50">
                  {creator.role}
                </Title>
              </div>
            </div>

            <Title
              as="p"
              variant="raw"
              className="whitespace-pre-line text-lg text-steel-50"
            >
              {creator.bio}
            </Title>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-4">
              {creator.stats.map((stat) => (
                <span
                  key={stat.label}
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-label-l font-medium"
                >
                  <span className="text-brand-800">{stat.value}</span>
                  <span className="text-steel-950">{stat.label}</span>
                </span>
              ))}
            </div>

            <Button size="none" className="px-6 py-3 text-label-l">
              {creator.followLabel}
            </Button>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-page px-6 pt-[62px] pb-16 lg:px-10">
        <FilterBar
          basePath={`/creators/${slug}`}
          categories={categories}
          query={query}
        />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ownCourses.length === 0 ? (
            <Title
              as="p"
              variant="lg"
              className="text-lg text-steel-700 sm:col-span-2 lg:col-span-3"
            >
              {creator.name} hasn&apos;t published any courses yet. Follow to
              get notified when something new drops.
            </Title>
          ) : visibleCourses.length === 0 ? (
            <div className="flex flex-col items-center gap-4 sm:col-span-2 lg:col-span-3">
              <Title as="p" variant="lg" className="text-lg text-steel-700">
                No courses match your filters.
              </Title>
              <Button
                href={`/creators/${slug}`}
                size="none"
                className="px-6 py-3 text-label-m"
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} variant="grid" />
            ))
          )}
        </div>
      </main>
    </>
  );
}
