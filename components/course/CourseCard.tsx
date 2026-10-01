import Link from "next/link";

import CourseCardContent, {
  type CourseCardVariant,
} from "@/components/course/CourseCardContent";
import CardShell from "@/components/ui/CardShell";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
  variant?: CourseCardVariant;
}

export default function CourseCard({
  course,
  variant = "home",
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block min-w-0 cursor-pointer"
    >
      <CardShell lift>
        <CourseCardContent course={course} variant={variant} />
      </CardShell>
    </Link>
  );
}
