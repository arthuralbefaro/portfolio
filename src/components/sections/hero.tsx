import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { GridRow } from "@/components/section";
import { Button } from "@/components/ui/button";
import { MetaLabel } from "@/components/ui/meta-label";
import type { Dictionary } from "@/content/dictionary";
import { socials } from "@/data/socials";

interface HeroProps {
  dict: Dictionary;
}

export function Hero({ dict }: HeroProps) {
  const { profile, ui } = dict;
  const linkedinHref = socials.find((s) => s.label === "LinkedIn")?.href ?? "#";

  const meta = [
    { key: "loc", value: profile.location },
    { key: "work", value: `${profile.company.name} · ${ui.hero.workSuffix}` },
    { key: "focus", value: profile.availability },
  ];

  return (
    <section
      id="inicio"
      className="border-border scroll-mt-16 border-b pt-32 pb-24 sm:pt-48"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        <GridRow
          rail={
            <div data-reveal className="space-y-8">
              <MetaLabel>{ui.hero.mark}</MetaLabel>

              <dl className="space-y-4">
                {meta.map(({ key, value }) => (
                  <div key={key}>
                    <dt className="text-muted-foreground text-meta font-mono uppercase">
                      {key}
                    </dt>
                    <dd className="text-muted-foreground text-meta mt-1 font-mono">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emphasis text-meta flex items-start gap-2 font-mono transition-colors"
              >
                <span
                  aria-hidden
                  className="bg-emphasis mt-1 size-1.5 shrink-0 rounded-full"
                />
                <span>
                  {ui.hero.available}
                  <ArrowUpRight
                    aria-hidden
                    className="ml-1 inline size-3.5 align-text-bottom"
                  />
                </span>
              </a>
            </div>
          }
        >
          <div data-reveal className="col-span-4 sm:col-span-6">
            <h1 className="font-display text-display leading-[0.95] font-bold tracking-tight">
              {profile.firstName}
              <br />
              {profile.name.replace(`${profile.firstName} `, "")}
            </h1>

            <p className="text-muted-foreground text-meta mt-6 font-mono">
              {profile.role}
            </p>

            <p className="text-muted-foreground text-lead mt-6 leading-relaxed text-pretty">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg">
                <a href={profile.resumeUrl} download>
                  <ArrowDownToLine />
                  {ui.hero.resume}
                </a>
              </Button>
              {socials
                .filter((s) => s.label === "GitHub" || s.label === "LinkedIn")
                .map(({ label, href, icon: Icon }) => (
                  <Button key={label} asChild variant="outline" size="lg">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon />
                      {label.toLowerCase()}
                    </a>
                  </Button>
                ))}
            </div>
          </div>

          <div
            data-reveal
            style={{ transitionDelay: "80ms" }}
            className="col-span-4 mt-16 justify-self-center sm:col-span-3 sm:col-start-7 sm:mt-0 sm:justify-self-stretch"
          >
            <div className="border-border bg-surface relative aspect-[4/5] w-64 overflow-hidden rounded-sm border sm:w-full">
              <Image
                src={profile.avatar}
                alt={ui.hero.photoAlt.replace("{name}", profile.name)}
                fill
                priority
                quality={90}
                sizes="256px"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </GridRow>
      </div>
    </section>
  );
}
