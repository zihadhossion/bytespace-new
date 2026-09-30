import type { Metadata } from "next";

import CategoryTabs from "@/components/home/CategoryTabs";
import CourseCard from "@/components/home/CourseCard";
import CatalogHero from "@/components/search/CatalogHero";
import FilterBar from "@/components/search/FilterBar";
import Pagination from "@/components/search/Pagination";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { allCourses } from "@/data/courses";
import {
  COURSES_PER_PAGE,
  type CourseQuery,
  type SearchParams,
  courseDefaults,
  filterCourses,
  hrefWith,
  paginate,
  parseCourseQuery,
  sortCourses,
  uniqueCategories,
} from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Browse Courses",
  description: "Find ByteSpace courses by category, level, and relevance.",
};

interface CoursesPageProps {
  searchParams: Promise<SearchParams>;
}

const formKeys = ["category", "level", "rating", "price", "sort"] as const;

function buildCourseHref(query: CourseQuery, changes: Partial<CourseQuery>) {
  return hrefWith("/courses", query, courseDefaults, changes);
}

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const query = parseCourseQuery(await searchParams);

  const filtered = filterCourses(allCourses, query);
  const sorted = sortCourses(filtered, query.sort);
  const { items, page, totalPages } = paginate(
    sorted,
    query.page,
    COURSES_PER_PAGE,
  );

  const categories = uniqueCategories(allCourses);
  const formParams = Object.fromEntries(
    formKeys.filter((key) => query[key]).map((key) => [key, query[key]]),
  );

  return (
    <>
      <CatalogHero
        ariaLabel="Course catalog"
        title="Browse Courses"
        searchAriaLabel="Search courses"
        filterLabel="Courses"
        q={query.q}
        formParams={formParams}
      />

      <main className="mx-auto w-full max-w-page px-6 pt-[72px] pb-16 lg:px-10">
        <FilterBar basePath="/courses" categories={categories} query={query} />

        <CategoryTabs
          tabs={["Featured", ...categories]}
          showMore={false}
          centered={false}
          active={query.category || "Featured"}
          hrefFor={(tab) =>
            buildCourseHref(query, {
              category: tab === "Featured" ? "" : tab,
            })
          }
          className="mt-8"
        />

        {items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center gap-4 py-16 text-center md:mt-[77px]">
            <Title
              as="h2"
              variant="heading"
              className="font-heading text-heading font-semibold text-steel-950"
            >
              No courses found
            </Title>
            <Title as="p" variant="raw" className="text-lg text-steel-400">
              Try a different search or clear your filters.
            </Title>
            <Button
              href="/courses"
              size="none"
              className="mt-2 px-6 py-3 text-label-m"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-[77px] lg:grid-cols-3">
            {items.map((course) => (
              <CourseCard key={course.id} course={course} variant="grid" />
            ))}
          </div>
        )}

        <Pagination
          page={page}
          totalPages={totalPages}
          hrefFor={(nextPage) => buildCourseHref(query, { page: nextPage })}
          className="mt-16 flex justify-center"
        />
      </main>
    </>
  );
}
