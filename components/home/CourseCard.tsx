import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-steel-100 bg-white">
      <div className="relative aspect-[341/195] w-full overflow-hidden bg-steel-100">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-subheading text-black">{course.title}</h3>
          <p className="text-xs text-muted">by {course.author}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-steel-50 px-3 py-1.5 text-xs text-steel-700">
            {course.level}
          </span>
          <span className="text-xs text-steel-950">{course.students}+</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="flex items-baseline gap-1">
            <span className="text-subheading text-price">{course.price}</span>
            <span className="text-xs text-muted">/lifetime</span>
          </p>
          <p className="text-lg text-muted">{course.rating}</p>
        </div>
      </div>
    </article>
  );
}
