import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CourseFilters } from "@/components/sections/CourseFilters";
import { CourseSearch } from "@/components/sections/CourseSearch";
import { CourseToolbar } from "@/components/sections/CourseToolbar";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { Pagination } from "@/components/ui/Pagination";
import { COURSES, COURSES_PAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Courses — ByteSpace",
  description:
    "Browse the full ByteSpace course library across design, development, business and more.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <CourseSearch />

        <section className="bg-surface py-section lg:py-section-lg">
          <Container>
            <h2 className="sr-only">Course results</h2>

            <CourseToolbar />
            <CourseFilters align="start" limit={9} className="mt-8" />

            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>

            <div className="mt-12 lg:mt-16">
              <Pagination
                currentPage={1}
                totalPages={COURSES_PAGE.totalPages}
                basePath="/courses"
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
