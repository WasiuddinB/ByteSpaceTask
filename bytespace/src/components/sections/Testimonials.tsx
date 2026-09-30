import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { TESTIMONIALS, TESTIMONIALS_SECTION } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="bg-linear-to-bl from-accent/25 via-surface to-primary/10 py-section lg:py-section-lg">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-heading-md text-foreground lg:text-heading-lg">
            {TESTIMONIALS_SECTION.title}
          </h2>
          <p className="text-body-md text-muted lg:text-body-lg">
            {TESTIMONIALS_SECTION.description}
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="flex h-full flex-col rounded-lg bg-surface p-8 shadow-card">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  aria-hidden="true"
                  sizes="80px"
                  className="h-20 w-20 rounded-full object-cover"
                />

                <figcaption className="mt-6">
                  <span className="block text-label-lg font-semibold text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="mt-1 block text-body-md text-primary">
                    {testimonial.role}
                  </span>
                </figcaption>

                <blockquote className="mt-6 text-body-md text-muted">
                  {testimonial.quote}
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
