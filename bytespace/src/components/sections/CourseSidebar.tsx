import Image from "next/image";
import Link from "next/link";

import creatorAvatar from "@/components/images/CreatorAvatar.svg";
import { Button } from "@/components/ui/Button";
import { COURSE_DETAIL } from "@/lib/constants";

import type { Course } from "@/lib/constants";

interface CourseSidebarProps {
  course: Course;
}

export function CourseSidebar({ course }: CourseSidebarProps) {
  const { curriculum, creator } = COURSE_DETAIL;

  return (
    <aside className="rounded-lg bg-surface p-6 shadow-card lg:p-8">
      <h2 className="text-heading-sm text-foreground">{curriculum.title}</h2>

      <ol className="mt-6 flex flex-col gap-4">
        {curriculum.lessons.map((lesson) => (
          <li key={lesson.id} className="flex items-start gap-3">
            <span className="text-body-sm text-foreground">{lesson.id}</span>
            <span className="flex-1 text-body-sm text-foreground">
              {lesson.title}
            </span>
            <span className="shrink-0 text-body-sm text-primary">
              {lesson.duration}
            </span>
          </li>
        ))}
      </ol>

      <p className="mt-4 text-body-sm text-muted">{curriculum.more}</p>

      <p className="mt-6 text-body-sm text-foreground">{COURSE_DETAIL.pitch}</p>

      <p className="mt-6 flex items-baseline">
        <span className="text-heading-md text-primary">{course.price}</span>
        <span className="text-body-sm text-foreground">{course.billing}</span>
      </p>

      <Button variant="accent" size="md" className="mt-4 w-full">
        {COURSE_DETAIL.enrolLabel}
      </Button>

      <h3 className="mt-8 text-heading-sm text-foreground">
        {COURSE_DETAIL.includesTitle}
      </h3>

      <ul className="mt-4 flex flex-col gap-3">
        {COURSE_DETAIL.includes.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <Image
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="h-5 w-auto shrink-0"
            />
            <span className="text-body-sm text-foreground">{item.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <Image
            src={creatorAvatar}
            alt=""
            aria-hidden="true"
            sizes="40px"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
          <div>
            <span className="block text-label-md text-foreground">
              {creator.name}
            </span>
            <span className="block text-body-sm text-muted">
              {creator.role}
            </span>
          </div>
        </div>

        <p className="mt-6 text-body-sm text-foreground">
          {COURSE_DETAIL.pitch}
        </p>

        <Link
          href={creator.href}
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-label-md text-foreground transition-colors hover:bg-background"
        >
          {creator.action}
        </Link>
      </div>
    </aside>
  );
}
