import Image from "next/image";

import chevronDown from "@/components/images/IconChevronDown.svg";
import searchIcon from "@/components/images/SearchIcon.svg";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COURSES_PAGE } from "@/lib/constants";

export function CourseSearch() {
  return (
    <section className="on-primary grid-lines bg-primary pt-32 pb-16 lg:pt-36 lg:pb-20">
      <Container>
        <h1 className="text-center text-heading-md text-white lg:text-heading-lg">
          {COURSES_PAGE.title}
        </h1>

        <form className="mx-auto mt-8 flex max-w-2xl items-center gap-3">
          <label htmlFor="course-search" className="sr-only">
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
              id="course-search"
              type="search"
              placeholder={COURSES_PAGE.searchPlaceholder}
              className="h-12 w-full min-w-0 rounded-full bg-surface pr-6 pl-13 text-body-md text-foreground placeholder:text-muted"
            />
          </div>

          <Button type="submit" variant="accent" size="md" className="gap-2">
            {COURSES_PAGE.scopeLabel}
            <Image
              src={chevronDown}
              alt=""
              aria-hidden="true"
              className="h-3 w-auto"
            />
          </Button>
        </form>
      </Container>
    </section>
  );
}
