import { Block, Section, SectionHeading } from "@/components/section";
import { BulletList } from "@/components/ui/bullet-list";
import { MetaLabel } from "@/components/ui/meta-label";
import type { Dictionary } from "@/content/dictionary";

interface AboutProps {
  dict: Dictionary;
}

export function About({ dict }: AboutProps) {
  const { profile, education, languages, ui } = dict;

  return (
    <Section id="sobre" mark={ui.about.mark}>
      <SectionHeading title={ui.about.title} />

      <Block width="prose">
        <div
          data-reveal
          className="text-muted-foreground text-body space-y-6 leading-relaxed text-pretty"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </Block>

      <Block offset className="mt-16">
        <div data-reveal>
          <MetaLabel as="h3">{ui.about.skills}</MetaLabel>
          <BulletList
            items={[...profile.highlights]}
            tone="emphasis"
            className="mt-6"
          />
        </div>
      </Block>

      <Block className="border-border mt-16 border-t pt-8">
        <div data-reveal className="grid gap-8 sm:grid-cols-2">
          <div>
            <MetaLabel as="h3">{ui.about.languages}</MetaLabel>
            <ul className="mt-6 space-y-2">
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

          <div>
            <MetaLabel as="h3">{ui.about.education}</MetaLabel>
            <p className="text-body mt-6 font-medium">{education[0]?.degree}</p>
            <p className="text-muted-foreground text-body">
              {education[0]?.institution}
            </p>
            <p className="text-muted-foreground text-meta mt-1 font-mono">
              {education[0]?.period}
            </p>
          </div>
        </div>
      </Block>
    </Section>
  );
}
