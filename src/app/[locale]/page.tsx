import { notFound } from "next/navigation";

import { About } from "@/components/sections/about";
import { CaseStudies } from "@/components/sections/case-studies";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) {
    notFound();
  }
  const dict = getDictionary(raw);

  return (
    <>
      <Hero dict={dict} />
      <About dict={dict} />
      <TechStack dict={dict} />
      <CaseStudies dict={dict} />
      <Certifications dict={dict} />
      <ExperienceSection dict={dict} />
      <Education dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
