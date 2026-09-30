import Link from "next/link";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { images } from "@/lib/images";

interface PaginationProps {
  page: number;
  totalPages: number;
  hrefFor: (page: number) => string;
  className?: string;
}

type PageItem = number | "ellipsis-left" | "ellipsis-right";

function pageItems(page: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  if (page <= 4) {
    return [1, 2, 3, 4, 5, "ellipsis-right", totalPages];
  }
  if (page >= totalPages - 3) {
    return [
      1,
      "ellipsis-left",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }
  return [
    1,
    "ellipsis-left",
    page - 1,
    page,
    page + 1,
    "ellipsis-right",
    totalPages,
  ];
}

export default function Pagination({
  page,
  totalPages,
  hrefFor,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const isFirst = page <= 1;
  const isLast = page >= totalPages;

  return (
    <nav
      aria-label="Pagination"
      className={`flex h-12 items-center gap-6 ${className}`}
    >
      {isFirst ? (
        <span
          aria-label="Previous page"
          aria-disabled="true"
          className="flex h-12 w-14 items-center justify-center rounded-full border border-steel-200 bg-white opacity-40"
        >
          <Icon src={images.icons.arrowLeft} className="h-6 w-6" />
        </span>
      ) : (
        <Button
          href={hrefFor(page - 1)}
          variant="outline"
          size="none"
          scroll={false}
          aria-label="Previous page"
          className="h-12 w-14 bg-white hover:border-steel-200"
        >
          <Icon src={images.icons.arrowLeft} className="h-6 w-6" />
        </Button>
      )}

      {pageItems(page, totalPages).map((item, index) =>
        typeof item === "number" ? (
          item === page ? (
            <span
              key={item}
              aria-current="page"
              className="font-heading text-[20px] leading-[28px] font-semibold text-steel-200"
            >
              {item}
            </span>
          ) : (
            <Link
              key={item}
              href={hrefFor(item)}
              scroll={false}
              className="font-heading text-[20px] leading-[28px] font-semibold text-steel-950 transition-opacity hover:opacity-70"
            >
              {item}
            </Link>
          )
        ) : (
          <span
            key={`${index}-${item}`}
            aria-hidden="true"
            className="font-heading text-[20px] leading-[28px] font-semibold text-steel-400"
          >
            …
          </span>
        ),
      )}

      {isLast ? (
        <span
          aria-label="Next page"
          aria-disabled="true"
          className="flex h-12 w-14 items-center justify-center rounded-full border border-steel-200 bg-white opacity-40"
        >
          <Icon src={images.icons.arrowRight} className="h-6 w-6" />
        </span>
      ) : (
        <Button
          href={hrefFor(page + 1)}
          variant="outline"
          size="none"
          scroll={false}
          aria-label="Next page"
          className="h-12 w-14 bg-white hover:border-steel-200"
        >
          <Icon src={images.icons.arrowRight} className="h-6 w-6" />
        </Button>
      )}
    </nav>
  );
}
