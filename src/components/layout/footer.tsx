import Link from "next/link";

import type { Dictionary } from "@/content/dictionary";
import { socials } from "@/data/socials";
import type { Locale } from "@/i18n/config";

const githubHref = socials.find((s) => s.label === "GitHub")?.href ?? "#";
const linkedinHref = socials.find((s) => s.label === "LinkedIn")?.href ?? "#";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export function Footer({ dict, locale }: FooterProps) {
  const { profile, ui } = dict;
  const year = new Date().getFullYear();

  const externalLinks = [
    { label: ui.footer.links.github, href: githubHref, external: true },
    { label: ui.footer.links.linkedin, href: linkedinHref, external: true },
    { label: ui.footer.links.email, href: `mailto:${profile.email}` },
    { label: ui.footer.links.resume, href: profile.resumeUrl, download: true },
  ];

  const home = `/${locale}`;
  const footerNav = [
    { label: ui.footer.nav.casos, href: `${home}#casos` },
    { label: ui.footer.nav.certificacoes, href: `${home}#certificacoes` },
    { label: ui.footer.nav.experiencia, href: `${home}#experiencia` },
    { label: ui.footer.nav.contato, href: `${home}#contato` },
  ];

  return (
    <footer>
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-body font-mono">
              arthur<span className="text-muted-foreground">.</span>albefaro
            </p>
            <p className="text-muted-foreground text-meta mt-1">
              {profile.role}
            </p>

            <div className="text-meta mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(link.download ? { download: true } : {})}
                  className="text-muted-foreground hover:text-emphasis transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={ui.footer.navLabel}>
            <ul className="text-meta flex flex-col gap-2 font-mono sm:items-end">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-emphasis transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-border mt-12 border-t pt-6">
          <p className="text-muted-foreground text-meta font-mono">
            © {year} {profile.name}. {ui.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
