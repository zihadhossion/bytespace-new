export interface Category {
  label: string;
  href: string;
  icon?: string;
}

export const featuredCategories: Category[] = [
  { label: "Design", href: "/categories/design" },
  { label: "Development", href: "/categories/development" },
  { label: "IT & Software", href: "/categories/it-software" },
  { label: "Business", href: "/categories/business" },
  { label: "Marketing", href: "/categories/marketing" },
  { label: "Photography", href: "/categories/photography" },
];

export const categoryTabs: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const platformStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits: string[] = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];
