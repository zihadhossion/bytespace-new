import type { MetadataRoute } from "next";
import { allCourses } from "@/data/courses";
import { creators } from "@/data/creator";

const BASE_URL = "https://bytespace-new-peach.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${BASE_URL}/courses`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/creators`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const coursePages: MetadataRoute.Sitemap = allCourses.map((course) => ({
    url: `${BASE_URL}/courses/${course.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const creatorPages: MetadataRoute.Sitemap = creators.map((creator) => ({
    url: `${BASE_URL}/creators/${creator.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...coursePages, ...creatorPages];
}
