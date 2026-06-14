import { GraduationCap } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Card } from "@/components/ui/card";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="formacao" className="bg-muted/30">
      <SectionHeading eyebrow="Formação" title="Formação acadêmica" />

      <div className="mx-auto max-w-3xl space-y-4">
        {education.map((item, index) => (
          <Reveal key={item.degree} delay={index * 0.05}>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="border-border bg-muted/50 flex size-10 shrink-0 items-center justify-center rounded-lg border">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold">{item.degree}</h3>
                    <span className="text-muted-foreground text-xs font-medium">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.institution}
                  </p>
                  {item.description && (
                    <p className="text-muted-foreground mt-2 text-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
