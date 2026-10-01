import type { Metadata } from "next";
import { notFound } from "next/navigation";

import type { Course } from "@/data/courses";
import { allCourses, getCourseById } from "@/data/courses";
import type { Creator } from "@/data/creator";
import { creators, getCreator } from "@/data/creator";

interface SlugParams {
  params: Promise<{ slug: string }>;
}

export function courseSlugs() {
  return allCourses.map((course) => ({ slug: course.id }));
}

export function creatorSlugs() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function metadataForCourse(
  { params }: SlugParams,
  make: (course: Course) => { title: string; description: string },
): Promise<Metadata> {
  const course = getCourseById((await params).slug);

  if (!course) {
    return { title: "Course Not Found" };
  }

  return make(course);
}

export async function metadataForCreator(
  { params }: SlugParams,
  make: (creator: Creator) => { title: string; description: string },
): Promise<Metadata> {
  const creator = getCreator((await params).slug);

  if (!creator) {
    return { title: "Creator Not Found" };
  }

  return make(creator);
}

export async function requireCourse({ params }: SlugParams): Promise<Course> {
  const course = getCourseById((await params).slug);

  if (!course) {
    notFound();
  }

  return course;
}

export async function requireCreator({ params }: SlugParams): Promise<Creator> {
  const creator = getCreator((await params).slug);

  if (!creator) {
    notFound();
  }

  return creator;
}
