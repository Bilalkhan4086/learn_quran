import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuUser } from "react-icons/lu";
import type { Course } from "@/constants/courses";

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.url}`}
      className="group premium-card flex min-w-0 cursor-pointer flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-soft"
      aria-label={`Explore ${course.heading}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sage">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover saturate-[0.72] transition duration-500 group-hover:scale-[1.03] group-hover:saturate-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/70 via-transparent to-brand/10" />
      </div>
      <article className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{course.eyebrow}</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-primary">
            {course.heading}
          </h3>
          <LuArrowUpRight
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-none text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {course.shortDescription}
        </p>
        <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs font-bold uppercase tracking-wider text-primary">
          <LuUser aria-hidden="true" className="h-4 w-4 text-accent" />
          {course.audience}
        </p>
      </article>
    </Link>
  );
}

export type CourseCardProps = {
  course: Course;
};
