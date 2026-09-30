import type { ReactNode } from "react";
import Image from "next/image";

import videoPoster from "@/components/images/CourseVideoPoster.svg";
import iconLevel from "@/components/images/IconLevel.svg";
import iconPlay from "@/components/images/IconPlay.svg";
import iconShare from "@/components/images/IconShare.svg";
import iconStar from "@/components/images/IconStar.svg";
import iconStudents from "@/components/images/IconStudents.svg";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COURSE_DETAIL } from "@/lib/constants";

import type { Course } from "@/lib/constants";

interface CourseDetailHeroProps {
  course: Course;
  aside?: ReactNode;
}

export function CourseDetailHero({ course, aside }: CourseDetailHeroProps) {
  const meta = [
    { id: "level", label: COURSE_DETAIL.level, icon: iconLevel },
    { id: "rating", label: COURSE_DETAIL.rating, icon: iconStar },
    { id: "students", label: COURSE_DETAIL.students, icon: iconStudents },
  ];

  return (
    <section className="on-primary grid-lines bg-primary pt-32 pb-section-compact lg:pt-36 lg:pb-10">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-heading-md text-white lg:text-heading-lg">
              {course.title}
              {COURSE_DETAIL.titleSuffix}
            </h1>
            <p className="mt-2 text-label-lg text-white">
              {COURSE_DETAIL.subtitle}
            </p>
            <p className="mt-4 text-body-md text-white">
              by <span className="text-accent">{course.author}</span>
            </p>
          </div>

          <Button variant="accent" size="md" className="gap-2">
            <Image
              src={iconShare}
              alt=""
              aria-hidden="true"
              className="h-4 w-auto"
            />
            {COURSE_DETAIL.shareLabel}
          </Button>
        </div>

        <ul className="mt-6 flex flex-wrap gap-3">
          {meta.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-label-sm text-foreground"
            >
              <Image
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="h-4 w-auto"
              />
              {item.label}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="relative lg:col-span-2">
            <Image
              src={videoPoster}
              alt={`Preview of ${course.title}`}
              sizes="(min-width: 1024px) 780px, 100vw"
              className="aspect-3/2 h-auto w-full rounded-lg object-cover"
            />
            <button
              type="button"
              aria-label={`Play preview of ${course.title}`}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={iconPlay}
                alt=""
                aria-hidden="true"
                className="h-16 w-auto lg:h-26"
              />
            </button>
          </div>

          {aside && <div className="lg:col-span-1 lg:h-0">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}
