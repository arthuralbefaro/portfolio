import Link from "next/link";

import type { Dictionary } from "@/content/dictionary";
import { socials } from "@/data/socials";

const githubHref = socials.find((s) => s.label === "GitHub")?.href ?? "#";
const linkedinHref = socials.find((s) => s.label === "LinkedIn")?.href ?? "#";

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const { profile, ui } = dict;
  const year = new Date().getFullYear();

  const externalLinks = [
    { label: ui.footer.links.github, href: githubHref, external: true },
    { label: ui.footer.links.linkedin, href: linkedinHref, external: true },
    { label: ui.footer.links.email, href: `mailto:${profile.email}` },
    { label: ui.footer.links.resume, href: profile.resumeUrl, download: true },
  ];

  const footerNav = [
    { label: ui.footer.nav.casos, href: "#casos" },
    { label: ui.footer.nav.certificacoes, href: "#certificacoes" },
    { label: ui.footer.nav.experiencia, href: "#experiencia" },
    { label: ui.footer.nav.contato, href: "#contato" },
  ];

  return (
    <footer>
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-sm">
              arthur<span className="text-muted-foreground">.</span>albefaro
            </p>
            <p className="text-muted-foreground mt-1 text-sm">{profile.role}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
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
            <ul className="flex flex-col gap-2.5 font-mono text-sm sm:items-end">
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

        <div className="border-border mt-10 border-t pt-6">
          <p className="text-muted-foreground font-mono text-xs">
            © {year} {profile.name}. {ui.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
