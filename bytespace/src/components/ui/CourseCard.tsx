import Image from "next/image";

import iconLevel from "@/components/images/IconLevel.svg";
import iconStar from "@/components/images/IconStar.svg";
import { COURSE_AVATARS } from "@/lib/constants";

import type { Course } from "@/lib/constants";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-surface p-4 shadow-card">
      <div className="relative">
        <Image
          src={course.thumbnail}
          alt=""
          aria-hidden="true"
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 90vw"
          className="aspect-video h-auto w-full rounded-md object-cover"
        />
        <ul className="absolute inset-x-3 bottom-3 flex flex-wrap items-center gap-2">
          {[course.lessons, course.duration, course.comments].map((meta) => (
            <li
              key={meta}
              className="rounded-full bg-white/75 px-3 py-1 text-body-xs text-foreground backdrop-blur-sm"
            >
              {meta}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="truncate text-heading-sm text-foreground">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-label-md text-foreground">
          {course.rating}
          <Image src={iconStar} alt="" aria-hidden="true" className="h-4 w-4" />
          <span className="sr-only">out of 5</span>
        </span>
      </div>

      <p className="mt-1 text-body-sm text-muted">
        by <span className="text-primary">{course.author}</span>
      </p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 rounded-full bg-background px-3 py-2 text-label-sm text-foreground">
          <Image
            src={iconLevel}
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
          {course.level}
        </span>

        <ul className="flex items-center -space-x-2">
          {COURSE_AVATARS.map((avatar) => (
            <li key={avatar.src}>
              <Image
                src={avatar}
                alt=""
                aria-hidden="true"
                sizes="32px"
                className="h-8 w-8 rounded-full ring-2 ring-surface"
              />
            </li>
          ))}
          <li className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-label-xs text-foreground ring-2 ring-surface">
            {course.learners}
          </li>
        </ul>
      </div>

      <p className="mt-4 flex items-baseline">
        <span className="text-heading-sm text-primary">{course.price}</span>
        <span className="text-body-sm text-foreground">{course.billing}</span>
      </p>
    </article>
  );
}
