import type { Course } from "@/data/courses";
import type { Creator } from "@/data/creator";

export type SearchParams = Record<string, string | string[] | undefined>;

export type CourseQuery = {
  q: string;
  category: string;
  level: string;
  rating: string;
  price: string;
  sort: string;
  page: number;
};

export type CreatorQuery = {
  q: string;
  category: string;
  followers: string;
  sort: string;
  page: number;
};

export const courseDefaults: CourseQuery = {
  q: "",
  category: "",
  level: "",
  rating: "",
  price: "",
  sort: "",
  page: 1,
};

export const creatorDefaults: CreatorQuery = {
  q: "",
  category: "",
  followers: "",
  sort: "",
  page: 1,
};

export const COURSES_PER_PAGE = 9;
export const CREATORS_PER_PAGE = 9;

export interface Option {
  value: string;
  label: string;
}

export const levelOptions: Option[] = [
  { value: "", label: "Any level" },
  { value: "Beginner", label: "Beginner" },
  { value: "Intermediate", label: "Intermediate" },
];

export const ratingOptions: Option[] = [
  { value: "", label: "Any rating" },
  { value: "4.5", label: "4.5 & up" },
  { value: "4.7", label: "4.7 & up" },
  { value: "4.8", label: "4.8 & up" },
];

export const priceOptions: Option[] = [
  { value: "", label: "Any price" },
  { value: "under-25", label: "Under $25" },
  { value: "25-35", label: "$25 - $35" },
  { value: "over-35", label: "Over $35" },
];

export const followerOptions: Option[] = [
  { value: "", label: "Any followers" },
  { value: "50", label: "50+ followers" },
  { value: "100", label: "100+ followers" },
  { value: "200", label: "200+ followers" },
];

export const courseSortOptions: Option[] = [
  { value: "", label: "Most relevant" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "students", label: "Most popular" },
];

export const creatorSortOptions: Option[] = [
  { value: "", label: "Most relevant" },
  { value: "followers", label: "Most followers" },
  { value: "courses", label: "Most courses" },
];

function optionValues(options: Option[]): string[] {
  return options.map((option) => option.value);
}

const levels = optionValues(levelOptions);
const ratings = optionValues(ratingOptions);
const prices = optionValues(priceOptions);
const courseSorts = optionValues(courseSortOptions);
const creatorSorts = optionValues(creatorSortOptions);
const followerSteps = optionValues(followerOptions);

export function optionLabel(options: Option[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? "";
}

export function categoryOptions(categories: string[]): Option[] {
  return [
    { value: "", label: "Any category" },
    ...categories.map((category) => ({ value: category, label: category })),
  ];
}

function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? (value[0] ?? "") : value ?? "").trim();
}

function pick(value: string, allowed: string[]): string {
  return allowed.includes(value) ? value : "";
}

function parsePage(value: string): number {
  const page = Number.parseInt(value, 10);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

export function parseCourseQuery(sp: SearchParams): CourseQuery {
  return {
    q: first(sp.q),
    category: first(sp.category),
    level: pick(first(sp.level), levels),
    rating: pick(first(sp.rating), ratings),
    price: pick(first(sp.price), prices),
    sort: pick(first(sp.sort), courseSorts),
    page: parsePage(first(sp.page)),
  };
}

export function parseCreatorQuery(sp: SearchParams): CreatorQuery {
  return {
    q: first(sp.q),
    category: first(sp.category),
    followers: pick(first(sp.followers), followerSteps),
    sort: pick(first(sp.sort), creatorSorts),
    page: parsePage(first(sp.page)),
  };
}

type Values = Record<string, string | number>;

function buildHref(path: string, values: Values, defaults: Values): string {
  const params = new URLSearchParams();
  for (const [key, raw] of Object.entries(values)) {
    const value = String(raw);
    const fallback = String(defaults[key] ?? "");
    if (value !== "" && value !== fallback) {
      params.set(key, value);
    }
  }
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

export function hrefWith<T extends { page: number }>(
  path: string,
  query: T,
  defaults: T,
  changes: Partial<T>,
): string {
  const next = { ...query, ...changes };
  if (!("page" in changes)) {
    next.page = defaults.page;
  }
  return buildHref(path, next, defaults);
}

export function createHref<T extends { page: number }>(
  path: string,
  defaults: T,
): (query: T, changes: Partial<T>) => string {
  return (query, changes) => hrefWith(path, query, defaults, changes);
}

export function pickFormParams<K extends string>(
  query: Record<K, string | number>,
  keys: readonly K[],
): Record<string, string> {
  return Object.fromEntries(
    keys.filter((key) => query[key]).map((key) => [key, String(query[key])]),
  );
}

function includes(haystack: string, needle: string): boolean {
  return haystack.toLowerCase().includes(needle);
}

function parsePrice(price: string): number {
  const value = Number.parseFloat(price.replace(/[^0-9.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

function matchesPriceBucket(price: number, bucket: string): boolean {
  if (bucket === "under-25") return price < 25;
  if (bucket === "25-35") return price >= 25 && price <= 35;
  if (bucket === "over-35") return price > 35;
  return true;
}

export function filterCourses(all: Course[], query: CourseQuery): Course[] {
  const needle = query.q.toLowerCase();
  return all.filter((course) => {
    if (needle && !includes(course.title, needle) && !includes(course.author, needle)) {
      return false;
    }
    if (query.category && course.category !== query.category) return false;
    if (query.level && course.level !== query.level) return false;
    if (query.rating && Number.parseFloat(course.rating) < Number.parseFloat(query.rating)) {
      return false;
    }
    if (query.price && !matchesPriceBucket(parsePrice(course.price), query.price)) {
      return false;
    }
    return true;
  });
}

export function sortCourses(list: Course[], sort: string): Course[] {
  const sorted = [...list];
  if (sort === "rating") {
    sorted.sort((a, b) => Number.parseFloat(b.rating) - Number.parseFloat(a.rating));
  } else if (sort === "price-asc") {
    sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (sort === "price-desc") {
    sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  } else if (sort === "students") {
    sorted.sort((a, b) => b.students - a.students);
  }
  return sorted;
}

export function filterCreators(all: Creator[], query: CreatorQuery): Creator[] {
  const needle = query.q.toLowerCase();
  const minFollowers = query.followers ? Number.parseInt(query.followers, 10) : 0;
  return all.filter((creator) => {
    if (
      needle &&
      !includes(creator.name, needle) &&
      !includes(creator.role, needle) &&
      !includes(creator.bio, needle)
    ) {
      return false;
    }
    if (query.category && creator.category !== query.category) return false;
    if (minFollowers && creator.followers < minFollowers) return false;
    return true;
  });
}

export function sortCreators(list: Creator[], sort: string): Creator[] {
  const sorted = [...list];
  if (sort === "followers") {
    sorted.sort((a, b) => b.followers - a.followers);
  } else if (sort === "courses") {
    sorted.sort((a, b) => b.courseIds.length - a.courseIds.length);
  }
  return sorted;
}

export function paginate<T>(
  list: T[],
  page: number,
  perPage: number,
): { items: T[]; page: number; totalPages: number } {
  const totalPages = Math.max(1, Math.ceil(list.length / perPage));
  const current = Math.min(Math.max(page, 1), totalPages);
  const start = (current - 1) * perPage;
  return { items: list.slice(start, start + perPage), page: current, totalPages };
}

export function uniqueCategories<T extends { category: string }>(items: T[]): string[] {
  return [...new Set(items.map((item) => item.category))];
}
