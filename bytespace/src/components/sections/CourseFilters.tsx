"use client";

import { useState } from "react";
import Link from "next/link";

import { COURSE_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const VISIBLE_COUNT = 18;

export function CourseFilters() {
  const [active, setActive] = useState(COURSE_CATEGORIES[0]);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      {COURSE_CATEGORIES.slice(0, VISIBLE_COUNT).map((category) => (
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
      <Link href="/courses" className="text-label-md text-primary">
        + More
      </Link>
    </div>
  );
}
