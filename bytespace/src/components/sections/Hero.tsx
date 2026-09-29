import Image from "next/image";

import circleWhite from "@/components/images/Hero_Circle_White.png";
import coneGreen from "@/components/images/Hero_Cone_Green.png";
import springGreen from "@/components/images/Hero_Spring_Green.png";
import springWhite from "@/components/images/Hero_Spring_White.png";
import searchIcon from "@/components/images/SearchIcon.svg";
import { HeroIllustration } from "@/components/sections/HeroIllustration";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="on-primary grid-lines relative overflow-hidden bg-primary">
      <Image
        src={springGreen}
        alt=""
        aria-hidden="true"
        sizes="160px"
        className="pointer-events-none absolute top-56 left-0 hidden w-40 -translate-x-1/3 lg:block"
      />
      <Image
        src={springWhite}
        alt=""
        aria-hidden="true"
        sizes="112px"
        className="pointer-events-none absolute top-104 left-40 hidden w-28 lg:block"
      />
      <Image
        src={circleWhite}
        alt=""
        aria-hidden="true"
        sizes="192px"
        className="pointer-events-none absolute bottom-40 left-8 hidden w-48 lg:block"
      />
      <Image
        src={coneGreen}
        alt=""
        aria-hidden="true"
        sizes="160px"
        className="pointer-events-none absolute top-56 right-0 hidden w-40 translate-x-1/4 lg:block"
      />
      <Image
        src={springWhite}
        alt=""
        aria-hidden="true"
        sizes="144px"
        className="pointer-events-none absolute right-12 bottom-56 hidden w-36 lg:block"
      />

      <Container className="relative pt-32 lg:pt-44">
        <h1 className="mx-auto max-w-4xl text-center text-heading-lg text-white lg:text-display-lg">
          {SITE.tagline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center text-body-lg text-white">
          {SITE.description}
        </p>

        <form className="mx-auto mt-10 flex max-w-2xl items-center gap-3">
          <label htmlFor="hero-search" className="sr-only">
            Search courses
          </label>
          <div className="relative flex-1">
            <Image
              src={searchIcon}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-5 h-4.5 w-auto -translate-y-1/2"
            />
            <input
              id="hero-search"
              type="search"
              placeholder="Course, topic, creator"
              className="h-14 w-full rounded-full bg-surface pr-6 pl-14 text-body-md text-foreground placeholder:text-muted"
            />
          </div>
          <Button type="submit" variant="accent" size="lg">
            Search
          </Button>
        </form>

        <HeroIllustration />
      </Container>
    </section>
  );
}
