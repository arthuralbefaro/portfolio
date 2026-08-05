import { ArrowUpRight } from "lucide-react";

import { Block, Section, SectionHeading } from "@/components/section";
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
    <Section id="experiencia" mark={ui.experience.mark}>
      <SectionHeading title={ui.experience.title} />

      <Block>
        <ol>
          {experiences.map((exp, index) => (
            <li
              key={`${exp.company}-${exp.period}`}
              data-reveal
              style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
              className="border-border grid grid-cols-4 gap-x-6 border-t py-8 sm:grid-cols-9"
            >
              <div className="text-muted-foreground text-meta col-span-4 space-y-1 font-mono sm:col-span-3">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-emphasis inline-flex items-center gap-1 transition-colors"
                  >
                    {exp.company}
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </a>
                ) : (
                  <p className="text-foreground">{exp.company}</p>
                )}
                <p>{exp.period}</p>
              </div>

              <div className="col-span-4 mt-4 sm:col-span-6 sm:mt-0">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <h3 className="font-display text-subtitle font-semibold tracking-tight">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <Badge variant="accent">{ui.experience.current}</Badge>
                  )}
                </div>

                <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
                  {exp.description}
                </p>

                <BulletList items={exp.achievements} className="mt-6" />

                <TagList items={exp.stack} className="mt-6" />
              </div>
            </li>
          ))}
        </ol>
      </Block>
    </Section>
  );
}
