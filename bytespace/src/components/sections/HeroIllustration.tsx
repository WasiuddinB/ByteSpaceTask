import Image from "next/image";

import cardProgress from "@/components/images/Hero_Card_Bar_2.png";
import cardStudents from "@/components/images/Hero_Card_Bar_3.png";
import cardTopic from "@/components/images/Hero_Card_Bar_1.png";
import ellipse from "@/components/images/Hero_Ellipse_Behind_Human.png";
import human from "@/components/images/Hero_Human.png";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto mt-12 max-w-3xl lg:mt-16">
      <Image
        src={ellipse}
        alt=""
        aria-hidden="true"
        sizes="(min-width: 1024px) 768px, 100vw"
        className="absolute inset-x-0 bottom-0 w-full"
      />

      <Image
        src={human}
        alt="A student wearing headphones, smiling while holding a laptop"
        priority
        sizes="(min-width: 1024px) 768px, 100vw"
        className="relative mx-auto h-auto w-4/5"
      />

      <Image
        src={cardTopic}
        alt="UI/UX Design — 200 courses, 1000+ students"
        sizes="(min-width: 1024px) 280px, 40vw"
        className="absolute top-1/4 left-0 h-auto w-2/5 rounded-md bg-surface shadow-card"
      />

      <Image
        src={cardProgress}
        alt="Learning progress: 55 percent complete"
        sizes="(min-width: 1024px) 300px, 42vw"
        className="absolute top-2/4 right-0 h-auto w-2/5 rounded-md bg-surface shadow-card"
      />

      <Image
        src={cardStudents}
        alt="Happy students, rated 4.5 from 240 reviews, with over 2000 learners"
        sizes="(min-width: 1024px) 320px, 45vw"
        className="absolute bottom-8 left-0 h-auto w-2/5 rounded-md bg-surface shadow-card"
      />
    </div>
  );
}
