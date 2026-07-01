import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/section";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export function Contact() {
  return (
    <Section id="contato">
      <p className="text-dim font-mono text-sm">{"// contato"}</p>

      <div className="mt-6 max-w-2xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Vamos conversar
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl text-pretty">
          Entre em contato para falar sobre projetos, vagas ou tecnologia
        </p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <ContactForm />

        <div className="flex flex-col gap-8">
          <ul className="border-border flex flex-col border-t font-mono text-sm">
            {socials.map(({ label, href, icon: Icon, handle }) => (
              <li key={label} className="border-border border-b">
                <a
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group text-muted-foreground hover:text-emphasis flex items-center gap-3 py-3 transition-colors"
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="truncate">{handle ?? label}</span>
                  <ArrowUpRight className="ml-auto size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
            <li className="text-dim py-3">{profile.location}</li>
          </ul>

          <Button asChild variant="outline" size="lg" className="self-start">
            <a href={profile.resumeUrl} download>
              baixar currículo
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
