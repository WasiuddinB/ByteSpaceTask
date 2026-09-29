import Image from "next/image";

import revenueCard from "@/components/images/BehindFemaleCard.png";
import yearToDateCard from "@/components/images/BehindFemaleCard2.png";
import female from "@/components/images/FemaleIllu.png";
import studentsCard from "@/components/images/Hero_Card_Bar_3.png";
import springGreen from "@/components/images/Hero_Spring_Green.png";

export function CreatorIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <Image
        src={revenueCard}
        alt="Total revenue for July 1 to 28: $120.29, up $12"
        sizes="(min-width: 1024px) 300px, 55vw"
        className="absolute top-0 left-0 h-auto w-2/5 rounded-md shadow-card"
      />

      <Image
        src={yearToDateCard}
        alt="Year to date 2023: $1,200.38, up $12"
        sizes="(min-width: 1024px) 200px, 38vw"
        className="absolute top-2/6 left-0 h-auto w-2/7 rounded-md shadow-card"
      />

      <Image
        src={springGreen}
        alt=""
        aria-hidden="true"
        sizes="130px"
        className="pointer-events-none absolute top-1/4 right-12 w-32"
      />

      <Image
        src={female}
        alt="A course creator wearing headphones and holding a tablet"
        sizes="(min-width: 1024px) 400px, 65vw"
        className="relative mx-auto h-auto w-3/4"
      />

      <Image
        src={studentsCard}
        alt="Happy students, rated 4.5 from 240 reviews, with over 2000 learners"
        sizes="(min-width: 1024px) 320px, 55vw"
        className="absolute right-12 bottom-4 h-auto w-2/6 rounded-md bg-surface p-3 shadow-card"
      />
    </div>
  );
}
