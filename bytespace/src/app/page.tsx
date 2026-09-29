import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { CreateCourses } from "@/components/sections/CreateCourses";
import { CreatorCta } from "@/components/sections/CreatorCta";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { LogoBar } from "@/components/sections/LogoBar";
import { ProfessionalGrowth } from "@/components/sections/ProfessionalGrowth";

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
      </main>
    </>
  );
}
