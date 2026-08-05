import { Section, SectionHeading } from "@/components/section";
import { TagList } from "@/components/ui/tag-list";
import type { Dictionary } from "@/content/dictionary";

interface TechStackProps {
  dict: Dictionary;
}

export function TechStack({ dict }: TechStackProps) {
  const { skillGroups, ui } = dict;

  return (
    <Section id="stack">
      <SectionHeading
        mark={ui.techStack.mark}
        title={ui.techStack.title}
        description={ui.techStack.description}
      />

      <div className="grid sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={group.category}
            data-reveal
            style={{ transitionDelay: `${index * 50}ms` }}
            className="border-border border-t py-7 sm:odd:border-r sm:odd:pr-10 sm:even:pl-10"
          >
            <h3 className="font-display text-base font-medium">
              {group.categoryLabel ?? group.category}
            </h3>
            <p className="text-dim text-meta mt-1 font-mono">
              {group.description}
            </p>
            <TagList items={group.items} className="mt-4" />
          </div>
        ))}
      </div>
    </Section>
  );
}
