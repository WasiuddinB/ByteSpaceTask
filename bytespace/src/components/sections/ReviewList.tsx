"use client";

import { useState } from "react";
import Image from "next/image";

import iconStarFilled from "@/components/images/IconStarFilled.svg";
import { StarRating } from "@/components/ui/StarRating";
import { COURSE_REVIEWS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const RATING_FILTERS = [5, 4, 3, 2, 1];

export function ReviewList() {
  const [filter, setFilter] = useState<number | null>(null);

  const visible = filter
    ? COURSE_REVIEWS.reviews.filter((review) => review.rating === filter)
    : COURSE_REVIEWS.reviews;

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          aria-pressed={filter === null}
          onClick={() => setFilter(null)}
          className={cn(
            "rounded-full px-5 py-2 text-label-md transition-colors",
            filter === null
              ? "bg-accent text-foreground"
              : "bg-background text-foreground hover:bg-border",
          )}
        >
          {COURSE_REVIEWS.allLabel}
        </button>

        {RATING_FILTERS.map((rating) => (
          <button
            key={rating}
            type="button"
            aria-pressed={filter === rating}
            onClick={() => setFilter(rating)}
            className={cn(
              "flex items-center gap-2 rounded-full px-5 py-2 text-label-md transition-colors",
              filter === rating
                ? "bg-accent text-foreground"
                : "bg-background text-foreground hover:bg-border",
            )}
          >
            <Image
              src={iconStarFilled}
              alt=""
              aria-hidden="true"
              className="h-4 w-auto"
            />
            {rating}
            <span className="sr-only">star reviews</span>
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p role="status" className="mt-8 text-body-md text-muted">
          {COURSE_REVIEWS.emptyMessage}
        </p>
      ) : (
        <ul className="mt-8 flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.id}>
              <article className="rounded-lg border border-border p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.avatar}
                      alt=""
                      aria-hidden="true"
                      sizes="48px"
                      className="h-12 w-12 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <span className="block text-label-md text-foreground">
                        {review.name}
                      </span>
                      <span className="block text-body-sm text-muted">
                        {review.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-body-sm text-muted">{review.date}</span>
                </div>

                <StarRating
                  value={review.rating}
                  label={`${review.rating} out of 5 stars`}
                  className="mt-4"
                />

                <p className="mt-4 text-body-md text-muted">{review.quote}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
