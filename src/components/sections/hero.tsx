import { ArrowDownToLine, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <div className="border-border bg-card text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
              <span className="bg-foreground/40 size-1.5 rounded-full" />
              {profile.availability}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-3 text-lg font-medium sm:text-xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-muted-foreground mt-6 max-w-xl text-base text-pretty sm:text-lg">
              {profile.headline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href={profile.resumeUrl} download>
                  <ArrowDownToLine />
                  Baixar currículo
                </a>
              </Button>
              {socials
                .filter((s) => s.label !== "Email")
                .map(({ label, href, icon: Icon }) => (
                  <Button key={label} asChild variant="outline" size="lg">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon />
                      {label}
                    </a>
                  </Button>
                ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="text-muted-foreground mt-8 flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" />
              {profile.location}
            </p>
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="justify-self-center lg:justify-self-end"
        >
          <div className="relative">
            <div className="border-border bg-card relative aspect-square w-64 overflow-hidden rounded-2xl border sm:w-72">
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
              className="border-border bg-background hover:border-foreground/30 absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium shadow-sm transition-colors"
            >
              {profile.company.name}
              <ArrowUpRight className="text-muted-foreground size-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
