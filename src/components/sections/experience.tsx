import { ArrowUpRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { BulletList } from "@/components/ui/bullet-list";
import { TagList } from "@/components/ui/tag-list";
import type { Dictionary } from "@/content/dictionary";

interface ExperienceProps {
  dict: Dictionary;
}

export function ExperienceSection({ dict }: ExperienceProps) {
  const { experiences, ui } = dict;

  return (
    <Section id="experiencia">
      <SectionHeading mark={ui.experience.mark} title={ui.experience.title} />

      <ol className="border-border relative border-l">
        {experiences.map((exp, index) => (
          <li
            key={`${exp.company}-${exp.period}`}
            data-reveal
            style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
            className="relative ml-6 pb-10 last:pb-0"
          >
            <span className="border-background bg-emphasis absolute top-1.5 -left-[1.6875rem] size-3 rounded-full border-2" />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-display text-base font-semibold">
                {exp.role}
              </h3>
              {exp.current && (
                <Badge variant="accent">{ui.experience.current}</Badge>
              )}
            </div>

            <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 font-mono text-xs">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-emphasis inline-flex items-center gap-0.5 transition-colors"
                >
                  {exp.company}
                  <ArrowUpRight className="size-3.5" />
                </a>
              ) : (
                <span className="text-foreground">{exp.company}</span>
              )}
              <span aria-hidden>·</span>
              <span>{exp.period}</span>
            </div>

            <p className="text-muted-foreground text-body mt-4 text-pretty">
              {exp.description}
            </p>

            <BulletList items={exp.achievements} className="mt-4" />

            <TagList items={exp.stack} className="mt-4" />
          </li>
        ))}
      </ol>
    </Section>
  );
}
