import Image from "next/image";

import iconCategory from "@/components/images/IconCategory.svg";
import iconFilter from "@/components/images/IconFilter.svg";
import iconLevel from "@/components/images/IconLevel.svg";
import iconSort from "@/components/images/IconSort.svg";
import { COURSES_PAGE } from "@/lib/constants";

const toolbarIcons = [iconFilter, iconLevel, iconCategory];

const chipStyles =
  "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2 text-label-md text-foreground transition-colors hover:bg-background";

export function CourseToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {COURSES_PAGE.toolbar.map((label, index) => (
          <button key={label} type="button" className={chipStyles}>
            <Image
              src={toolbarIcons[index]}
              alt=""
              aria-hidden="true"
              className="h-4 w-auto"
            />
            {label}
          </button>
        ))}
      </div>

      <button type="button" className={chipStyles}>
        <Image
          src={iconSort}
          alt=""
          aria-hidden="true"
          className="h-4 w-auto"
        />
        {COURSES_PAGE.sortLabel}
      </button>
    </div>
  );
}
