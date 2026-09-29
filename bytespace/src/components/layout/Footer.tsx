import Link from "next/link";

import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL,
  NEWSLETTER,
  SITE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-surface">
      <Container>
        <div className="grid gap-12 border-t border-border py-section lg:grid-cols-5 lg:gap-16 lg:py-section-lg">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label={`${SITE.name} home`}
              className="inline-flex text-foreground"
            >
              <Logo />
            </Link>

            <p className="mt-6 text-body-md text-foreground">
              {NEWSLETTER.description}
            </p>

            <form className="mt-8 flex items-center gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={NEWSLETTER.placeholder}
                className="h-14 w-full min-w-0 rounded-full border border-border bg-surface px-6 text-body-md text-foreground placeholder:text-muted"
              />
              <Button type="submit" variant="accent" size="lg">
                {NEWSLETTER.action}
              </Button>
            </form>

            <p className="mt-4 max-w-md text-body-sm text-foreground">
              {NEWSLETTER.disclaimer}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3"
          >
            {FOOTER_COLUMNS.map((column) => (
              <ul key={column.id} className="flex flex-col gap-5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-md text-foreground transition-opacity hover:opacity-70"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-sm text-foreground">
            {FOOTER_LEGAL.copyright}
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {FOOTER_LEGAL.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-body-sm text-foreground transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
