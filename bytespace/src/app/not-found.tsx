import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { NOT_FOUND } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="on-primary grid-lines bg-primary pt-32 pb-section lg:pt-36 lg:pb-section-lg">
          <Container>
            <div className="text-center">
              <span
                aria-hidden="true"
                className="block bg-linear-to-b from-accent to-primary bg-clip-text text-display-lg text-transparent sm:text-display-2xl"
              >
                {NOT_FOUND.code}
              </span>

              <h1 className="mx-auto -mt-6 max-w-4xl text-heading-md text-white sm:-mt-20 lg:text-display-lg">
                {NOT_FOUND.title}
              </h1>

              <p className="mx-auto mt-8 max-w-xl text-body-md text-white">
                {NOT_FOUND.description}
              </p>

              <ButtonLink
                href={NOT_FOUND.action.href}
                variant="accent"
                size="lg"
                className="mt-8"
              >
                {NOT_FOUND.action.label}
              </ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
