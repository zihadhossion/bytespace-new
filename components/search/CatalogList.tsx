import { type ReactNode } from "react";

import CatalogEmptyState from "@/components/search/CatalogEmptyState";
import Pagination from "@/components/search/Pagination";
import Reveal from "@/components/ui/Reveal";

interface CatalogListProps<T> {
  items: T[];
  itemKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  emptyTitle: string;
  clearHref: string;
  page: number;
  totalPages: number;
  hrefFor: (page: number) => string;
}

export default function CatalogList<T>({
  items,
  itemKey,
  renderItem,
  emptyTitle,
  clearHref,
  page,
  totalPages,
  hrefFor,
}: CatalogListProps<T>) {
  return (
    <>
      {items.length === 0 ? (
        <CatalogEmptyState title={emptyTitle} clearHref={clearHref} />
      ) : (
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-[77px] lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={itemKey(item)} delay={(index % 3) * 0.08}>
              {renderItem(item)}
            </Reveal>
          ))}
        </div>
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        hrefFor={hrefFor}
        className="mt-16 flex justify-center"
      />
    </>
  );
}
