import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { PARTNER_LOGOS } from "@/lib/constants";

export function LogoBar() {
  return (
    <section
      aria-label="Partner logos"
      className="bg-background py-section-compact lg:py-section-compact-lg"
    >
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-16">
          {PARTNER_LOGOS.map((logo) => (
            <li key={logo.id} className="flex items-center gap-2">
              <Image
                src={logo.mark}
                alt=""
                aria-hidden="true"
                sizes="48px"
                className="h-8 w-auto lg:h-12"
              />
              <span className="font-heading text-label-lg text-muted lg:text-heading-sm">
                {logo.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
