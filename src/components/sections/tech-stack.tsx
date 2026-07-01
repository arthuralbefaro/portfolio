import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHeading
        mark="// stack"
        title="Tecnologias"
        description="Stack usada em projetos, estudos e desenvolvimento de aplicações"
      />

      <div className="grid sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="border-border border-t py-7 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
          >
            <h3 className="font-display text-base font-medium">
              {group.category}
            </h3>
            <p className="text-dim mt-1 font-mono text-xs">
              {group.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item} variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
