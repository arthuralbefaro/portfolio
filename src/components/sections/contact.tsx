import { ArrowUpRight } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import type { Dictionary } from "@/content/dictionary";
import { socials } from "@/data/socials";

interface ContactProps {
  dict: Dictionary;
}

export function Contact({ dict }: ContactProps) {
  const { profile, ui } = dict;

  return (
    <Section id="contato" mark={ui.contact.mark}>
      <SectionHeading
        title={ui.contact.title}
        description={ui.contact.description}
      />

      <div data-reveal className="col-span-4 mt-4 sm:col-span-5 sm:col-start-1">
        <ContactForm messages={ui.contact.form} />
      </div>

      <div
        data-reveal
        style={{ transitionDelay: "80ms" }}
        className="col-span-4 mt-12 sm:col-span-4 sm:col-start-6 sm:mt-4"
      >
        <ul className="border-border text-meta flex flex-col border-t font-mono">
          {socials.map(({ label, href, icon: Icon, handle }) => (
            <li key={label} className="border-border border-b">
              <a
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group text-muted-foreground hover:text-emphasis flex items-center gap-4 py-4 transition-colors"
              >
                <Icon aria-hidden className="size-4 shrink-0" />
                <span className="truncate">{handle ?? label}</span>
                <ArrowUpRight
                  aria-hidden
                  className="ml-auto size-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
            </li>
          ))}
          <li className="text-muted-foreground py-4">{profile.location}</li>
        </ul>

        <Button asChild variant="outline" size="lg" className="mt-8">
          <a href={profile.resumeUrl} download>
            {ui.contact.resume}
          </a>
        </Button>
      </div>
    </Section>
  );
}
