import { ReviewList } from "@/components/sections/ReviewList";
import { StarRating } from "@/components/ui/StarRating";
import { COURSE_REVIEWS } from "@/lib/constants";

export function CourseReviews() {
  const total = COURSE_REVIEWS.breakdown.reduce(
    (sum, row) => sum + row.count,
    0,
  );

  return (
    <div>
      <h2 className="text-heading-sm text-foreground">
        {COURSE_REVIEWS.title}
      </h2>
      <p className="mt-4 text-body-md text-muted">
        {COURSE_REVIEWS.description}
      </p>

      <div className="mt-6 flex flex-col gap-6 rounded-lg border border-border p-6 sm:flex-row sm:items-center">
        <div className="flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-md bg-accent">
          <span className="text-body-sm text-foreground">
            {COURSE_REVIEWS.summaryLabel}
          </span>
          <span className="text-heading-md text-foreground">
            {COURSE_REVIEWS.average}
          </span>
        </div>

        <ul className="flex flex-1 flex-col gap-2">
          {COURSE_REVIEWS.breakdown.map((row) => (
            <li key={row.stars} className="flex items-center gap-4">
              <span
                role="progressbar"
                aria-valuenow={row.count}
                aria-valuemin={0}
                aria-valuemax={total}
                aria-label={`${row.stars} star reviews`}
                className="h-2 flex-1 overflow-hidden rounded-full bg-background"
              >
                <span
                  style={{ width: `${(row.count / total) * 100}%` }}
                  className="block h-full rounded-full bg-accent"
                />
              </span>

              <StarRating
                value={row.stars}
                label={`${row.stars} stars`}
                className="shrink-0"
              />

              <span className="w-10 shrink-0 text-right text-body-sm text-muted">
                {row.count}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="mt-10 text-heading-sm text-foreground">
        {COURSE_REVIEWS.listTitle}
      </h3>

      <div className="mt-6">
        <ReviewList />
      </div>
    </div>
  );
}
