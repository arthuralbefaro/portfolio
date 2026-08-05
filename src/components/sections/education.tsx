import { Block, Section, SectionHeading } from "@/components/section";
import { MetaLabel } from "@/components/ui/meta-label";
import type { Dictionary } from "@/content/dictionary";

interface EducationProps {
  dict: Dictionary;
}

export function Education({ dict }: EducationProps) {
  const { education, ui } = dict;

  return (
    <Section id="formacao" mark={ui.education.mark}>
      <SectionHeading title={ui.education.title} />

      <Block width="prose">
        <ul>
          {education.map((item, index) => (
            <li
              key={item.degree}
              data-reveal
              style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
              className="border-border border-t py-6"
            >
              <MetaLabel>{item.institution}</MetaLabel>

              <h3 className="font-display text-body mt-2 font-medium">
                {item.degree}
              </h3>

              <p className="text-muted-foreground text-meta mt-1 font-mono">
                {item.period}
              </p>

              {item.description && (
                <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
                  {item.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Block>
    </Section>
  );
}
