import Image from "next/image";

import pyramidGreen from "@/components/images/Cta_Pyramid_Green.svg";
import torusGreen from "@/components/images/Cta_Torus_Green.svg";
import studentsCard from "@/components/images/Hero_Card_Bar_3.png";
import springWhite from "@/components/images/Hero_Spring_White.png";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES } from "@/lib/constants";

export function AuthIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-4/5 w-full max-w-lg"
    >
      <div className="absolute top-1/6 left-0 w-1/2">
        <CourseCard course={COURSES[1]} />
      </div>

      <div className="absolute top-0 right-0 w-3/4">
        <CourseCard course={COURSES[2]} />
      </div>

      <Image
        src={torusGreen}
        alt=""
        sizes="110px"
        className="pointer-events-none absolute top-8 left-18 w-1/5"
      />

      <Image
        src={pyramidGreen}
        alt=""
        sizes="140px"
        className="pointer-events-none absolute bottom-35 left-0 w-1/4"
      />

      <Image
        src={springWhite}
        alt=""
        sizes="110px"
        className="pointer-events-none absolute top-3/5 right-0 w-1/5"
      />

      <div className="absolute right-0 bottom-20 w-1/2 rounded-md bg-accent p-3">
        <Image
          src={studentsCard}
          alt=""
          sizes="(min-width: 1024px) 260px, 45vw"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
