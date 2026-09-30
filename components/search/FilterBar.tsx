"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Title from "@/components/ui/Title";
import { images } from "@/lib/images";

import {
  categoryOptions,
  courseDefaults,
  courseSortOptions,
  creatorDefaults,
  creatorSortOptions,
  followerOptions,
  hrefWith,
  levelOptions,
  optionLabel,
  priceOptions,
  ratingOptions,
  type CourseQuery,
  type CreatorQuery,
} from "@/lib/catalog";

interface MenuOption {
  label: string;
  href: string;
  active: boolean;
}

interface MenuGroup {
  title?: string;
  options: MenuOption[];
}

interface DropdownProps {
  label: string;
  detail?: string;
  icon: string;
  groups: MenuGroup[];
  active?: boolean;
  align?: "left" | "right";
  ariaLabel: string;
}

function Dropdown({
  label,
  detail,
  icon,
  groups,
  active = false,
  align = "left",
  ariaLabel,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <Button
        variant={active ? "primary" : "outline"}
        size="none"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((value) => !value)}
        className={`gap-1 px-4 py-3 text-label-m ${
          active
            ? "border border-volt-400"
            : "bg-white text-steel-700 hover:border-steel-200"
        }`}
      >
        <Icon src={icon} className="h-6 w-6" />
        {detail ? `${label}: ${detail}` : label}
        <Icon
          src={images.icons.chevronDown}
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </Button>

      {open ? (
        <div
          className={`absolute top-[calc(100%+8px)] z-30 min-w-[216px] rounded-2xl border border-steel-200 bg-white p-2 shadow-xl ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {groups.map((group, index) => (
            <div key={group.title ?? index}>
              {group.title ? (
                <Title
                  as="p"
                  variant="raw"
                  className="px-3 pt-2 pb-1 text-label-s font-medium text-steel-400"
                >
                  {group.title}
                </Title>
              ) : null}
              {group.options.map((option) => (
                <Button
                  key={`${group.title ?? ""}-${option.label}`}
                  href={option.href}
                  variant={option.active ? "primary" : "ghost"}
                  size="none"
                  scroll={false}
                  aria-current={option.active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`justify-between gap-3 px-3 py-2 text-base ${
                    option.active ? "" : "hover:bg-steel-50"
                  }`}
                >
                  {option.label}
                  {option.active ? (
                    <Icon
                      src={images.icons.checkBlue}
                      className="h-4 w-4"
                    />
                  ) : null}
                </Button>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const pillIcon = {
  course: images.icons.filter,
  creator: images.icons.filterCreator,
};

type FilterBarProps =
  | {
      variant?: "course";
      basePath: string;
      categories: string[];
      query: CourseQuery;
      className?: string;
    }
  | {
      variant: "creator";
      basePath: string;
      categories: string[];
      query: CreatorQuery;
      className?: string;
    };

export default function FilterBar(props: FilterBarProps) {
  const { basePath, categories, className = "" } = props;

  const categoryGroup = (category: string, link: (value: string) => string): MenuGroup => ({
    options: categoryOptions(categories).map((option) => ({
      label: option.label,
      href: link(option.value),
      active: category === option.value,
    })),
  });

  let filterPill: { label: string; detail?: string; groups: MenuGroup[]; active: boolean };
  let levelPill: DropdownProps | null = null;
  let categoryPill: DropdownProps;
  let sortPill: DropdownProps;

  if (props.variant === "creator") {
    const { query } = props;
    const link = (changes: Partial<CreatorQuery>) =>
      hrefWith(basePath, query, creatorDefaults, changes);

    filterPill = {
      label: "Filter",
      detail: optionLabel(followerOptions, query.followers) || undefined,
      active: query.followers !== "",
      groups: [
        {
          title: "Followers",
          options: followerOptions.map((option) => ({
            label: option.label,
            href: link({ followers: option.value }),
            active: query.followers === option.value,
          })),
        },
      ],
    };

    categoryPill = {
      label: "Category",
      detail: query.category || undefined,
      icon: images.icons.category,
      active: query.category !== "",
      ariaLabel: "Filter by category",
      groups: [categoryGroup(query.category, (value) => link({ category: value }))],
    };

    sortPill = {
      label: optionLabel(creatorSortOptions, query.sort) || "Most relevant",
      icon: images.icons.sort,
      ariaLabel: "Sort creators",
      align: "right",
      active: query.sort !== "",
      groups: [
        {
          options: creatorSortOptions.map((option) => ({
            label: option.label,
            href: link({ sort: option.value }),
            active: query.sort === option.value,
          })),
        },
      ],
    };
  } else {
    const { query } = props;
    const link = (changes: Partial<CourseQuery>) =>
      hrefWith(basePath, query, courseDefaults, changes);

    const ratingDetail = optionLabel(ratingOptions, query.rating);
    const priceDetail = optionLabel(priceOptions, query.price);
    const details = [ratingDetail, priceDetail]
      .filter((detail) => detail && !detail.startsWith("Any"))
      .join(", ");

    filterPill = {
      label: "Filter",
      detail: details || undefined,
      active: query.rating !== "" || query.price !== "",
      groups: [
        {
          title: "Rating",
          options: ratingOptions.map((option) => ({
            label: option.label,
            href: link({ rating: option.value }),
            active: query.rating === option.value,
          })),
        },
        {
          title: "Price",
          options: priceOptions.map((option) => ({
            label: option.label,
            href: link({ price: option.value }),
            active: query.price === option.value,
          })),
        },
      ],
    };

    levelPill = {
      label: "Level",
      detail: query.level || undefined,
      icon: images.icons.levelDark,
      active: query.level !== "",
      ariaLabel: "Filter by level",
      groups: [
        {
          options: levelOptions.map((option) => ({
            label: option.label,
            href: link({ level: option.value }),
            active: query.level === option.value,
          })),
        },
      ],
    };

    categoryPill = {
      label: "Category",
      detail: query.category || undefined,
      icon: images.icons.category,
      active: query.category !== "",
      ariaLabel: "Filter by category",
      groups: [categoryGroup(query.category, (value) => link({ category: value }))],
    };

    sortPill = {
      label: optionLabel(courseSortOptions, query.sort) || "Most relevant",
      icon: images.icons.sort,
      ariaLabel: "Sort courses",
      align: "right",
      active: query.sort !== "",
      groups: [
        {
          options: courseSortOptions.map((option) => ({
            label: option.label,
            href: link({ sort: option.value }),
            active: query.sort === option.value,
          })),
        },
      ],
    };
  }

  const filterIcon =
    props.variant === "creator" ? pillIcon.creator : pillIcon.course;

  return (
    <div
      className={`flex min-h-12 w-full flex-wrap items-start justify-between gap-3 ${className}`}
    >
      <div className="flex flex-wrap gap-4">
        <Dropdown
          label={filterPill.label}
          detail={filterPill.detail}
          groups={filterPill.groups}
          active={filterPill.active}
          icon={filterIcon}
          ariaLabel="More filters"
        />
        {levelPill ? <Dropdown {...levelPill} /> : null}
        <Dropdown {...categoryPill} />
      </div>

      <Dropdown {...sortPill} />
    </div>
  );
}
