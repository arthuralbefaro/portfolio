import { Section, SectionHeading } from "@/components/section";
import { BulletList } from "@/components/ui/bullet-list";
import { MetaLabel } from "@/components/ui/meta-label";
import type { Dictionary } from "@/content/dictionary";

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  const { profile, education, languages, ui } = dict;

  return (
    <Section id="sobre">
      <SectionHeading mark={ui.about.mark} title={ui.about.title} />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div
          data-reveal
          className="text-muted-foreground space-y-4 leading-relaxed text-pretty"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "80ms" }}
          className="space-y-8"
        >
          <div>
            <MetaLabel as="h3">{ui.about.skills}</MetaLabel>
            <BulletList
              items={[...profile.highlights]}
              tone="emphasis"
              className="mt-4"
            />
          </div>

          <div className="border-border border-t pt-6">
            <MetaLabel as="h3">{ui.about.languages}</MetaLabel>
            <ul className="mt-4 space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="text-body flex items-center justify-between"
                >
                  <span className="text-muted-foreground">{lang.name}</span>
                  <span className="text-meta font-mono">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border border-t pt-6">
            <MetaLabel as="h3">{ui.about.education}</MetaLabel>
            <p className="mt-4 font-medium">{education[0]?.degree}</p>
            <p className="text-muted-foreground text-body">
              {education[0]?.institution}
            </p>
            <p className="text-muted-foreground text-meta mt-1 font-mono">
              {education[0]?.period}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
