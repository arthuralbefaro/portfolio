import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Card } from "@/components/ui/card";
import { education, languages } from "@/data/education";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="sobre" className="bg-muted/30">
      <SectionHeading eyebrow="Sobre mim" title="Sobre mim" />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-4">
          <Card className="h-full p-6 sm:p-8">
            <div className="text-muted-foreground space-y-4 leading-relaxed text-pretty">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="h-full p-6 sm:p-8">
            <h3 className="text-sm font-semibold">Competências</h3>
            <ul className="mt-4 space-y-3">
              {profile.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check className="text-foreground mt-0.5 size-4 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-border mt-6 border-t pt-6">
              <h3 className="text-sm font-semibold">Idiomas</h3>
              <ul className="mt-4 space-y-2.5">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-muted-foreground">{lang.name}</span>
                    <span className="font-medium">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-6">
        <Card className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
              Formação
            </p>
            <h3 className="mt-1 text-base font-semibold">
              {education[0]?.degree}
            </h3>
            <p className="text-muted-foreground text-sm">
              {education[0]?.institution}
            </p>
          </div>
          <span className="text-muted-foreground text-sm font-medium">
            {education[0]?.period}
          </span>
        </Card>
      </Reveal>
    </Section>
  );
}
