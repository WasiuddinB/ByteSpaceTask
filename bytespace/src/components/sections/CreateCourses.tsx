import Image from "next/image";

import iconCheck from "@/components/images/IconCheck.svg";
import { CreatorIllustration } from "@/components/sections/CreatorIllustration";
import { Container } from "@/components/ui/Container";
import { CREATOR_SECTION, SITE } from "@/lib/constants";

export function CreateCourses() {
  return (
    <section className="bg-linear-to-tr from-accent/15 via-surface to-primary/10 pt-section-compact pb-section lg:pt-section-compact-lg lg:pb-section-lg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-1">
            <CreatorIllustration />
          </div>

          <div className="lg:order-2">
            <h2 className="text-heading-md text-foreground lg:text-heading-lg">
              {CREATOR_SECTION.title}
            </h2>

            <p className="mt-6 text-body-md text-muted lg:text-body-lg">
              <strong className="text-foreground">{SITE.name}</strong>{" "}
              {CREATOR_SECTION.description}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {CREATOR_SECTION.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Image
                    src={iconCheck}
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0"
                  />
                  <span className="text-label-lg text-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
