import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Courses } from "@/components/sections/Courses";
import { CreateCourses } from "@/components/sections/CreateCourses";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { LogoBar } from "@/components/sections/LogoBar";
import { ProfessionalGrowth } from "@/components/sections/ProfessionalGrowth";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Courses />
        <LearningPaths />
        <ProfessionalGrowth />
        <CreateCourses />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
