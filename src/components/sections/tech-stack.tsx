import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { skillGroups } from "@/data/skills";

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow="Stack"
        title="Tecnologias"
        description="Stack usada em projetos, estudos e desenvolvimento de aplicações"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.05}>
            <Card className="group hover:border-foreground/20 h-full p-6 transition-colors">
              <div className="flex items-center gap-3">
                <div className="border-border bg-muted/50 text-foreground group-hover:border-foreground/20 flex size-10 items-center justify-center rounded-lg border transition-colors">
                  <group.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{group.category}</h3>
                  <p className="text-muted-foreground text-xs">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
