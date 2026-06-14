import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experiencia">
      <SectionHeading eyebrow="Experiência" title="Experiência profissional" />

      <ol className="border-border relative mx-auto max-w-3xl border-l">
        {experiences.map((exp, index) => (
          <Reveal
            as="li"
            key={`${exp.company}-${exp.period}`}
            delay={index * 0.05}
            className="relative ml-6 pb-10 last:pb-0"
          >
            <span className="border-background bg-foreground absolute top-1 -left-[1.6875rem] size-3.5 rounded-full border-2" />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold">{exp.role}</h3>
              {exp.current && <Badge variant="accent">Atual</Badge>}
            </div>

            <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 text-sm">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground/70 inline-flex items-center gap-0.5 font-medium transition-colors"
                >
                  {exp.company}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ) : (
                <span className="text-foreground font-medium">
                  {exp.company}
                </span>
              )}
              <span aria-hidden>·</span>
              <span>{exp.period}</span>
            </div>

            <p className="text-muted-foreground mt-3 text-sm text-pretty">
              {exp.description}
            </p>

            <ul className="mt-3 space-y-2">
              {exp.achievements.map((item) => (
                <li
                  key={item.slice(0, 24)}
                  className="text-muted-foreground flex items-start gap-2 text-sm"
                >
                  <span
                    aria-hidden
                    className="bg-muted-foreground mt-2 size-1 shrink-0 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.stack.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
