import Image from "next/image";

import iconCheck from "@/components/images/IconCheck.svg";
import { COURSE_DETAIL } from "@/lib/constants";

export function CourseAbout() {
  return (
    <div>
      <h2 className="text-heading-sm text-foreground">
        {COURSE_DETAIL.descriptionTitle}
      </h2>

      <div className="mt-4 flex flex-col gap-4">
        {COURSE_DETAIL.description.map((paragraph) => (
          <p key={paragraph} className="text-body-md text-muted">
            {paragraph}
          </p>
        ))}
      </div>

      <h2 className="mt-10 text-heading-sm text-foreground">
        {COURSE_DETAIL.sneakPeekTitle}
      </h2>

      <ul className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {COURSE_DETAIL.sneakPeek.map((image) => (
          <li key={image.src}>
            <Image
              src={image}
              alt=""
              aria-hidden="true"
              sizes="(min-width: 640px) 180px, 45vw"
              className="aspect-3/2 h-auto w-full rounded-md object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-heading-sm text-foreground">
        {COURSE_DETAIL.keyPointsTitle}
      </h2>

      <ul className="mt-4 flex flex-col gap-3">
        {COURSE_DETAIL.keyPoints.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <Image
              src={iconCheck}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 shrink-0"
            />
            <span className="text-body-md text-foreground">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
