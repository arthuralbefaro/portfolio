import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const meta = [
  { key: "loc", value: profile.location },
  { key: "work", value: `${profile.company.name} · backend & automação` },
  { key: "focus", value: profile.availability },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="border-border scroll-mt-16 border-b pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-dim font-mono text-sm">{"// backend engineer"}</p>

          <h1 className="font-display mt-6 text-5xl leading-[0.95] font-bold tracking-tight text-balance sm:text-7xl">
            {profile.firstName}
            <br />
            {profile.name.replace(`${profile.firstName} `, "")}
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-pretty">
            {profile.headline}
          </p>

          <dl className="text-dim mt-8 grid gap-1.5 font-mono text-sm">
            {meta.map(({ key, value }) => (
              <div key={key} className="flex gap-3">
                <dt className="text-dim w-14 shrink-0">{key}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={profile.resumeUrl} download>
                <ArrowDownToLine />
                baixar currículo
              </a>
            </Button>
            {socials
              .filter((s) => s.label !== "Email")
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

        <div className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div className="border-border bg-surface relative aspect-[4/5] w-64 overflow-hidden rounded-sm border sm:w-72">
              <Image
                src={profile.avatar}
                alt={`Foto de ${profile.name}`}
                fill
                priority
                sizes="(max-width: 640px) 16rem, 18rem"
                className="object-cover"
                placeholder="blur"
              />
            </div>
            <a
              href={profile.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border-strong bg-background hover:border-emphasis absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-sm border px-4 py-2 font-mono text-xs whitespace-nowrap transition-colors"
            >
              <span className="bg-emphasis size-1.5 rounded-full" />
              disponível p/ backend
              <ArrowUpRight className="text-muted-foreground size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
