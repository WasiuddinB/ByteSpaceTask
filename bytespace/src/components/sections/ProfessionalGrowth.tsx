import { GrowthIllustration } from "@/components/sections/GrowthIllustration";
import { Container } from "@/components/ui/Container";
import { GROWTH_SECTION } from "@/lib/constants";

export function ProfessionalGrowth() {
  return (
    <section className="bg-linear-to-br from-accent/15 via-surface to-primary/10 pt-section lg:pt-section-lg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-heading-md text-foreground lg:text-heading-lg">
              {GROWTH_SECTION.title}
            </h2>

            <p className="mt-6 text-body-md text-muted lg:text-body-lg">
              {GROWTH_SECTION.description}
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
              {GROWTH_SECTION.stats.map((stat) => (
                <div key={stat.id}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-heading-md text-primary lg:text-heading-lg">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-body-md text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <GrowthIllustration />
        </div>
      </Container>
    </section>
  );
}
