import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CourseToolbar } from "@/components/sections/CourseToolbar";
import { CreatorProfile } from "@/components/sections/CreatorProfile";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { COURSES, CREATOR_PROFILE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${CREATOR_PROFILE.name} — ByteSpace`,
  description: CREATOR_PROFILE.bio[0],
};

export default function CreatorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CreatorProfile />

        <section className="bg-surface py-section lg:py-section-lg">
          <Container>
            <h2 className="sr-only">Courses by {CREATOR_PROFILE.name}</h2>

            <CourseToolbar />

            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {COURSES.map((course) => (
                <li key={course.id}>
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
