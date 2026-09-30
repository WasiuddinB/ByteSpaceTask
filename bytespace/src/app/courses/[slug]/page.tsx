import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CourseAbout } from "@/components/sections/CourseAbout";
import { CourseDetailHero } from "@/components/sections/CourseDetailHero";
import { CourseSidebar } from "@/components/sections/CourseSidebar";
import { CourseTabs } from "@/components/sections/CourseTabs";
import { Container } from "@/components/ui/Container";
import { COURSE_DETAIL, COURSES } from "@/lib/constants";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((entry) => entry.id === slug);

  if (!course) return {};

  return {
    title: `${course.title} - Wasi ByteSpace`,
    description: COURSE_DETAIL.subtitle,
  };
}

export default async function CourseDetailPage({
  params,
}: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = COURSES.find((entry) => entry.id === slug);

  if (!course) notFound();

  const panels = [
    { id: "about", label: COURSE_DETAIL.tabs[0], content: <CourseAbout /> },
    { id: "lessons", label: COURSE_DETAIL.tabs[1], content: null },
    { id: "reviews", label: COURSE_DETAIL.tabs[2], content: null },
  ];

  return (
    <>
      <Navbar />
      <main>
        <CourseDetailHero
          course={course}
          aside={<CourseSidebar course={course} />}
        />

        <section className="bg-surface pt-section pb-section lg:pb-section-lg">
          <Container>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <CourseTabs panels={panels} />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
