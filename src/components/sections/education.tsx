import { Section, SectionHeading } from "@/components/section";
import type { Dictionary } from "@/content/dictionary";

interface EducationProps {
  dict: Dictionary;
}

export function Education({ dict }: EducationProps) {
  const { education, ui } = dict;

  return (
    <Section id="formacao">
      <SectionHeading mark={ui.education.mark} title={ui.education.title} />

      <div className="border-border border-t">
        {education.map((item, index) => (
          <div
            key={item.degree}
            data-reveal
            style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
            className="border-border border-b py-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display font-medium">{item.degree}</h3>
              <span className="text-dim font-mono text-xs">{item.period}</span>
            </div>
            <p className="text-muted-foreground mt-1 text-sm">
              {item.institution}
            </p>
            {item.description && (
              <p className="text-muted-foreground mt-2 max-w-3xl text-sm text-pretty">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
