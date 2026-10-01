import type { Metadata } from "next";

import CourseCard from "@/components/course/CourseCard";
import CatalogHero from "@/components/search/CatalogHero";
import CategoryTabs from "@/components/search/CategoryTabs";
import CatalogList from "@/components/search/CatalogList";
import FilterBar from "@/components/search/FilterBar";
import { allCourses } from "@/data/courses";
import {
  COURSES_PER_PAGE,
  type SearchParams,
  courseDefaults,
  createHref,
  filterCourses,
  paginate,
  parseCourseQuery,
  pickFormParams,
  sortCourses,
  uniqueCategories,
} from "@/lib/catalog";
import { container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Browse Courses",
  description: "Find ByteSpace courses by category, level, and relevance.",
};

interface CoursesPageProps {
  searchParams: Promise<SearchParams>;
}

const formKeys = ["category", "level", "rating", "price", "sort"] as const;

const buildCourseHref = createHref("/courses", courseDefaults);

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
  const formParams = pickFormParams(query, formKeys);

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

      <main className={`${container} pt-[72px] pb-16`}>
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

        <CatalogList
          items={items}
          itemKey={(course) => course.id}
          renderItem={(course) => <CourseCard course={course} variant="grid" />}
          emptyTitle="No courses found"
          clearHref="/courses"
          page={page}
          totalPages={totalPages}
          hrefFor={(nextPage) => buildCourseHref(query, { page: nextPage })}
        />
      </main>
    </>
  );
}
