import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEARNING_PATHS, LEARNING_PATHS_SECTION } from "@/lib/constants";

export function LearningPaths() {
  return (
    <section className="bg-surface pb-section lg:pb-section-lg">
      <Container>
        <SectionHeading
          title={LEARNING_PATHS_SECTION.title}
          description={LEARNING_PATHS_SECTION.description}
        />

        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6">
          {LEARNING_PATHS.map((path) => (
            <li key={path.id}>
              <Link
                href={`/courses/${path.id}`}
                className="flex h-full flex-col items-center justify-center gap-4 rounded-lg border border-border bg-surface px-4 py-8 text-center transition-colors hover:bg-background"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <Image
                    src={path.icon}
                    alt=""
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </span>
                <span className="text-label-lg text-foreground">
                  {path.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
