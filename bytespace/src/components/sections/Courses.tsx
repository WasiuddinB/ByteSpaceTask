import { CourseFilters } from "@/components/sections/CourseFilters";
import { CourseCard } from "@/components/ui/CourseCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COURSE_SECTION, COURSES } from "@/lib/constants";

export function Courses() {
  return (
    <section className="bg-surface py-section lg:py-section-lg">
      <Container>
        <SectionHeading
          title={COURSE_SECTION.title}
          description={COURSE_SECTION.description}
        />

        <CourseFilters />

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {COURSES.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
