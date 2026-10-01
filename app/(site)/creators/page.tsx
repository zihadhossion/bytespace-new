import type { Metadata } from "next";

import CreatorCard from "@/components/creator/CreatorCard";
import CatalogHero from "@/components/search/CatalogHero";
import CategoryTabs from "@/components/search/CategoryTabs";
import CatalogList from "@/components/search/CatalogList";
import FilterBar from "@/components/search/FilterBar";
import { creators } from "@/data/creator";
import {
  CREATORS_PER_PAGE,
  type SearchParams,
  createHref,
  creatorDefaults,
  filterCreators,
  paginate,
  parseCreatorQuery,
  pickFormParams,
  sortCreators,
  uniqueCategories,
} from "@/lib/catalog";
import { container } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meet Our Creators",
  description:
    "Browse the talented creators behind ByteSpace courses and follow their work.",
};

interface CreatorsPageProps {
  searchParams: Promise<SearchParams>;
}

const formKeys = ["followers", "sort"] as const;

const buildCreatorHref = createHref("/creators", creatorDefaults);

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
  const formParams = pickFormParams(query, formKeys);

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

      <main className={`${container} pt-[72px] pb-16`}>
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

        <CatalogList
          items={items}
          itemKey={(creator) => creator.slug}
          renderItem={(creator) => <CreatorCard creator={creator} />}
          emptyTitle="No creators found"
          clearHref="/creators"
          page={page}
          totalPages={totalPages}
          hrefFor={(nextPage) => buildCreatorHref(query, { page: nextPage })}
        />
      </main>
    </>
  );
}
