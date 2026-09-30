import Image from "next/image";

import iconModule from "@/components/images/IconModule.svg";
import { COURSE_LESSONS } from "@/lib/constants";

export function CourseLessons() {
  const { progress } = COURSE_LESSONS;

  return (
    <div>
      <h2 className="text-heading-sm text-foreground">
        {COURSE_LESSONS.title}
      </h2>
      <p className="mt-4 text-body-md text-muted">
        {COURSE_LESSONS.description}
      </p>

      <h3 className="mt-10 text-heading-sm text-foreground">
        {COURSE_LESSONS.listTitle}
      </h3>

      <ul className="mt-6 flex flex-col gap-6">
        {COURSE_LESSONS.modules.map((module) => (
          <li key={module.id} className="flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-accent">
              <Image
                src={iconModule}
                alt=""
                aria-hidden="true"
                className="h-4 w-auto"
              />
            </span>
            <div>
              <span className="block text-label-md text-foreground">
                {module.title}
              </span>
              <p className="mt-1 text-body-md text-muted">
                {module.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h3 className="mt-10 text-heading-sm text-foreground">
        {COURSE_LESSONS.contentTitle}
      </h3>
      <p className="mt-4 text-body-md text-muted">
        {COURSE_LESSONS.contentDescription}
      </p>

      <h3 className="mt-10 text-heading-sm text-foreground">
        {COURSE_LESSONS.progressTitle}
      </h3>
      <p className="mt-4 text-body-md text-muted">
        {COURSE_LESSONS.progressDescription}
      </p>

      <div className="mt-6 rounded-lg border border-border p-4">
        <p className="text-body-sm text-foreground">{progress.label}</p>
        <p className="mt-2 text-heading-md text-foreground">
          {progress.value}%
        </p>
        <div
          role="progressbar"
          aria-valuenow={progress.value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={progress.label}
          className="mt-4 h-2 w-full overflow-hidden rounded-full bg-background"
        >
          <div
            style={{ width: `${progress.value}%` }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </div>
    </div>
  );
}
