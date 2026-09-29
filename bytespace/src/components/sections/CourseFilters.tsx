"use client";

import { useState } from "react";
import Link from "next/link";

import { COURSE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface CourseFiltersProps {
  limit?: number;
  moreHref?: string;
  align?: "center" | "start";
  className?: string;
}

export function CourseFilters({
  limit = COURSE_CATEGORIES.length,
  moreHref,
  align = "center",
  className,
}: CourseFiltersProps) {
  const [active, setActive] = useState(COURSE_CATEGORIES[0]);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      {COURSE_CATEGORIES.slice(0, limit).map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={active === category}
          onClick={() => setActive(category)}
          className={cn(
            "rounded-full border px-5 py-2 text-label-md transition-colors",
            active === category
              ? "border-accent bg-accent text-foreground"
              : "border-border bg-surface text-foreground hover:bg-background",
          )}
        >
          {category}
        </button>
      ))}

      {moreHref && (
        <Link href={moreHref} className="text-label-md text-primary">
          + More
        </Link>
      )}
    </div>
  );
}
