import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Courses } from "@/components/sections/Courses";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { LogoBar } from "@/components/sections/LogoBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Courses />
        <LearningPaths />
      </main>
    </>
  );
}
