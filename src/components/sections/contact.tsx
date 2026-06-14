import { ArrowUpRight, MapPin } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <Section id="contato">
      <Reveal>
        <div className="border-border bg-card rounded-2xl border px-6 py-16 text-center sm:px-12 sm:py-20">
          <span className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
            Contato
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Vamos conversar
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-pretty">
            Entre em contato para falar sobre projetos, vagas ou tecnologia
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>Enviar e-mail</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resumeUrl} download>
                Baixar currículo
              </a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {socials.map(({ label, href, icon: Icon, handle }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
              >
                <Icon className="size-4" />
                {handle ?? label}
                <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
            <span className="text-muted-foreground inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {profile.location}
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
