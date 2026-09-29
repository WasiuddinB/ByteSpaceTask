import Image from "next/image";

import creatorAvatar from "@/components/images/CreatorAvatar.svg";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CREATOR_PROFILE } from "@/lib/constants";

export function CreatorProfile() {
  return (
    <section className="on-primary grid-lines bg-primary pt-32 pb-16 lg:pt-36 lg:pb-20">
      <Container>
        <div className="flex items-start gap-6">
          <Image
            src={creatorAvatar}
            alt=""
            aria-hidden="true"
            sizes="96px"
            className="h-24 w-24 shrink-0 rounded-lg object-cover"
          />

          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-heading-md text-white lg:text-heading-lg">
                {CREATOR_PROFILE.name}
              </h1>
              <span className="rounded-full bg-accent px-4 py-1 text-label-sm text-foreground">
                {CREATOR_PROFILE.badge}
              </span>
            </div>

            <p className="mt-2 text-body-md text-white">
              {CREATOR_PROFILE.role}
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-5xl">
          {CREATOR_PROFILE.bio.map((paragraph) => (
            <p key={paragraph} className="text-body-md text-white">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <ul className="flex flex-wrap gap-3">
            {CREATOR_PROFILE.stats.map((stat) => (
              <li
                key={stat.id}
                className="flex items-center gap-2 rounded-full bg-surface px-5 py-3 text-label-md"
              >
                <span className="text-primary">{stat.value}</span>
                <span className="text-foreground">{stat.label}</span>
              </li>
            ))}
          </ul>

          <Button variant="accent" size="md">
            {CREATOR_PROFILE.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
