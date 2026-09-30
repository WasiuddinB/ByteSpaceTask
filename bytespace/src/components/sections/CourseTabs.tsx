"use client";

import type { KeyboardEvent, ReactNode } from "react";
import { useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface CourseTabsProps {
  panels: { id: string; label: string; content: ReactNode }[];
}

export function CourseTabs({ panels }: CourseTabsProps) {
  const [active, setActive] = useState(panels[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const index = panels.findIndex((panel) => panel.id === active);
    let next = index;

    if (event.key === "ArrowRight") next = (index + 1) % panels.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + panels.length) % panels.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = panels.length - 1;
    else return;

    event.preventDefault();
    setActive(panels[next].id);
    tabRefs.current[panels[next].id]?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Course information"
        className="flex flex-wrap gap-3"
      >
        {panels.map((panel) => (
          <button
            key={panel.id}
            ref={(node) => {
              tabRefs.current[panel.id] = node;
            }}
            type="button"
            role="tab"
            id={`tab-${panel.id}`}
            aria-selected={active === panel.id}
            aria-controls={`panel-${panel.id}`}
            tabIndex={active === panel.id ? 0 : -1}
            onClick={() => setActive(panel.id)}
            onKeyDown={handleKeyDown}
            className={cn(
              "rounded-full px-5 py-2 text-label-md transition-colors",
              active === panel.id
                ? "bg-accent text-foreground"
                : "bg-background text-foreground hover:bg-border",
            )}
          >
            {panel.label}
          </button>
        ))}
      </div>

      {panels.map((panel) => (
        <div
          key={panel.id}
          role="tabpanel"
          id={`panel-${panel.id}`}
          aria-labelledby={`tab-${panel.id}`}
          hidden={active !== panel.id}
          tabIndex={0}
          className="mt-10"
        >
          {panel.content}
        </div>
      ))}
    </div>
  );
}
