import { About } from "@/components/sections/about";
import { CaseStudies } from "@/components/sections/case-studies";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <CaseStudies />
      <Certifications />
      <ExperienceSection />
      <Education />
      <Contact />
    </>
  );
}
