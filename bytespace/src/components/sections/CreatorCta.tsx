import Image from "next/image";

import coneWhite from "@/components/images/Cta_Cone_White.svg";
import cylinderWhite from "@/components/images/Cta_Cylinder_White.svg";
import pyramidGreen from "@/components/images/Cta_Pyramid_Green.svg";
import torusGreen from "@/components/images/Cta_Torus_Green.svg";
import springGreen from "@/components/images/Hero_Spring_Green.png";
import springWhite from "@/components/images/Hero_Spring_White.png";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { CREATOR_CTA } from "@/lib/constants";

export function CreatorCta() {
  return (
    <section className="on-primary grid-lines relative overflow-hidden bg-primary py-section lg:py-section-lg">
      <Image
        src={springGreen}
        alt=""
        aria-hidden="true"
        sizes="176px"
        className="pointer-events-none absolute -top-28 -left-3 hidden w-44 lg:block"
      />
      <Image
        src={springWhite}
        alt=""
        aria-hidden="true"
        sizes="128px"
        className="pointer-events-none absolute top-7 left-52 hidden w-32 lg:block"
      />
      <Image
        src={coneWhite}
        alt=""
        aria-hidden="true"
        sizes="128px"
        className="pointer-events-none absolute top-1/2 -left-2 hidden w-32 lg:block"
      />
      <Image
        src={torusGreen}
        alt=""
        aria-hidden="true"
        sizes="240px"
        className="pointer-events-none absolute -bottom-26 left-18 hidden w-60 lg:block"
      />
      <Image
        src={pyramidGreen}
        alt=""
        aria-hidden="true"
        sizes="112px"
        className="pointer-events-none absolute top-5 right-38 hidden w-28 lg:block"
      />
      <Image
        src={cylinderWhite}
        alt=""
        aria-hidden="true"
        sizes="240px"
        className="pointer-events-none absolute top-10 -right-34 hidden w-60 lg:block"
      />
      <Image
        src={springGreen}
        alt=""
        aria-hidden="true"
        sizes="224px"
        className="pointer-events-none absolute right-2 -bottom-42 hidden w-56 lg:block"
      />

      <Container className="relative">
        <h2 className="mx-auto max-w-3xl text-center text-heading-md text-white lg:text-heading-lg">
          {CREATOR_CTA.title}
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-center text-body-md text-white lg:text-body-lg">
          {CREATOR_CTA.description}
        </p>

        <div className="mt-10 flex justify-center">
          <ButtonLink href={CREATOR_CTA.action.href} variant="accent" size="lg">
            {CREATOR_CTA.action.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
