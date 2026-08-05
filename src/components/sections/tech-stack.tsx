import { Block, Section, SectionHeading } from "@/components/section";
import { TagList } from "@/components/ui/tag-list";
import type { Dictionary } from "@/content/dictionary";
import { cn } from "@/lib/utils";

interface TechStackProps {
  dict: Dictionary;
}

export function TechStack({ dict }: TechStackProps) {
  const { skillGroups, ui } = dict;

  return (
    <Section id="stack" mark={ui.techStack.mark}>
      <SectionHeading
        title={ui.techStack.title}
        description={ui.techStack.description}
      />

      <Block className="grid grid-cols-4 gap-x-6 sm:grid-cols-9">
        {skillGroups.map((group, index) => (
          <div
            key={group.category}
            data-reveal
            style={{ transitionDelay: `${index * 50}ms` }}
            className={cn(
              "border-border col-span-4 border-t py-8 sm:col-span-4",
              index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-6",
            )}
          >
            <h3 className="font-display text-subtitle font-medium tracking-tight">
              {group.categoryLabel ?? group.category}
            </h3>
            <p className="text-muted-foreground text-meta mt-1 font-mono">
              {group.description}
            </p>
            <TagList items={group.items} className="mt-4" />
          </div>
        ))}
      </Block>
    </Section>
  );
}
