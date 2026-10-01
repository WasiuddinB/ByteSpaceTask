import Image from "next/image";

import iconStar from "@/components/images/IconStar.svg";
import iconStarFilled from "@/components/images/IconStarFilled.svg";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  label?: string;
  className?: string;
}

const MAX_STARS = 5;

export function StarRating({ value, label, className }: StarRatingProps) {
  return (
    <span className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: MAX_STARS }, (_, index) => (
        <Image
          key={index}
          src={index < value ? iconStarFilled : iconStar}
          alt=""
          aria-hidden="true"
          className="h-4 w-auto"
        />
      ))}
      <span className="sr-only">{label ?? `${value} out of 5 stars`}</span>
    </span>
  );
}
