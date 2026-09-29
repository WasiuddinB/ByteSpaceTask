import Image from "next/image";

import progressCard from "@/components/images/Hero_Card_Bar_2.png";
import human from "@/components/images/Hero_Human.png";
import springGreen from "@/components/images/Hero_Spring_Green.png";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES } from "@/lib/constants";

export function GrowthIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-xl">
      <Image
        src={springGreen}
        alt=""
        aria-hidden="true"
        sizes="144px"
        className="pointer-events-none absolute top-1/6 right-4 w-1/4"
      />

      <div className="absolute top-0 left-0 w-2/4">
        <CourseCard course={COURSES[0]} />
      </div>

      <Image
        src={human}
        alt="A course creator smiling while holding a laptop"
        sizes="(min-width: 1024px) 460px, 70vw"
        className="absolute right-0 bottom-24 h-auto w-4/5"
      />

      <Image
        src={progressCard}
        alt="Learning progress: 55 percent complete"
        sizes="(min-width: 1024px) 230px, 40vw"
        className="absolute top-2/5 right-0 h-auto w-2/6 rounded-md bg-surface shadow-card"
      />
    </div>
  );
}
