import { Section, SectionHeading } from "@/components/section";
import { education } from "@/data/education";

export function Education() {
  return (
    <Section id="formacao">
      <SectionHeading mark="// formação" title="Formação acadêmica" />

      <div className="border-border border-t">
        {education.map((item) => (
          <div key={item.degree} className="border-border border-b py-7">
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
