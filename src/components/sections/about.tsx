import { Section, SectionHeading } from "@/components/section";
import { education, languages } from "@/data/education";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="sobre">
      <SectionHeading mark="// sobre" title="Sobre mim" />

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="text-muted-foreground space-y-4 leading-relaxed text-pretty">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-dim font-mono text-xs tracking-[0.14em] uppercase">
              Competências
            </h3>
            <ul className="mt-4 space-y-2.5">
              {profile.highlights.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex items-start gap-2.5 text-sm"
                >
                  <span
                    aria-hidden
                    className="bg-emphasis mt-1.5 size-1 shrink-0 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border border-t pt-6">
            <h3 className="text-dim font-mono text-xs tracking-[0.14em] uppercase">
              Idiomas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{lang.name}</span>
                  <span className="font-mono text-xs">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-border border-t pt-6">
            <h3 className="text-dim font-mono text-xs tracking-[0.14em] uppercase">
              Formação
            </h3>
            <p className="mt-4 font-medium">{education[0]?.degree}</p>
            <p className="text-muted-foreground text-sm">
              {education[0]?.institution}
            </p>
            <p className="text-dim mt-1 font-mono text-xs">
              {education[0]?.period}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
