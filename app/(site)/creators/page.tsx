import type { Metadata } from "next";

import CreatorCard from "@/components/creator/CreatorCard";
import CategoryTabs from "@/components/home/CategoryTabs";
import CatalogHero from "@/components/search/CatalogHero";
import FilterBar from "@/components/search/FilterBar";
import Pagination from "@/components/search/Pagination";
import Button from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { creators } from "@/data/creator";
import {
  CREATORS_PER_PAGE,
  type CreatorQuery,
  type SearchParams,
  creatorDefaults,
  filterCreators,
  hrefWith,
  paginate,
  parseCreatorQuery,
  sortCreators,
  uniqueCategories,
} from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Meet Our Creators",
  description:
    "Browse the talented creators behind ByteSpace courses and follow their work.",
};

interface CreatorsPageProps {
  searchParams: Promise<SearchParams>;
}

const formKeys = ["followers", "sort"] as const;

function buildCreatorHref(query: CreatorQuery, changes: Partial<CreatorQuery>) {
  return hrefWith("/creators", query, creatorDefaults, changes);
}

export default async function CreatorsPage({ searchParams }: CreatorsPageProps) {
  const query = parseCreatorQuery(await searchParams);

  const filtered = filterCreators(creators, query);
  const sorted = sortCreators(filtered, query.sort);
  const { items, page, totalPages } = paginate(
    sorted,
    query.page,
    CREATORS_PER_PAGE,
  );

  const categories = uniqueCategories(creators);
  const formParams = Object.fromEntries(
    formKeys.filter((key) => query[key]).map((key) => [key, query[key]]),
  );

  return (
    <>
      <CatalogHero
        ariaLabel="Creator catalog"
        title="Meet Our Creators"
        searchAriaLabel="Search creators"
        filterLabel="Creators"
        q={query.q}
        formParams={formParams}
      />

      <main className="mx-auto w-full max-w-page px-6 pt-[72px] pb-16 lg:px-10">
        <FilterBar
          variant="creator"
          basePath="/creators"
          categories={categories}
          query={query}
        />

        <CategoryTabs
          tabs={["All Creators", ...categories]}
          showMore={false}
          centered={false}
          ariaLabel="Creator specialties"
          active={query.category || "All Creators"}
          hrefFor={(tab) =>
            buildCreatorHref(query, {
              category: tab === "All Creators" ? "" : tab,
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
              No creators found
            </Title>
            <Title as="p" variant="raw" className="text-lg text-steel-400">
              Try a different search or clear your filters.
            </Title>
            <Button
              href="/creators"
              size="none"
              className="mt-2 px-6 py-3 text-label-m"
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-[77px] lg:grid-cols-3">
            {items.map((creator) => (
              <CreatorCard key={creator.slug} creator={creator} />
            ))}
          </div>
        )}

        <Pagination
          page={page}
          totalPages={totalPages}
          hrefFor={(nextPage) => buildCreatorHref(query, { page: nextPage })}
          className="mt-16 flex justify-center"
        />
      </main>
    </>
  );
}
