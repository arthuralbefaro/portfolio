import Link from "next/link";

import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const githubHref = socials.find((s) => s.label === "GitHub")?.href ?? "#";
const linkedinHref = socials.find((s) => s.label === "LinkedIn")?.href ?? "#";

const externalLinks = [
  { label: "GitHub", href: githubHref, external: true },
  { label: "LinkedIn", href: linkedinHref, external: true },
  { label: "E-mail", href: `mailto:${profile.email}` },
  { label: "Currículo", href: profile.resumeUrl, download: true },
];

const footerNav = [
  { label: "Casos Técnicos", href: "#casos" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-base font-semibold">{profile.name}</p>
            <p className="text-muted-foreground mt-1 text-sm">{profile.role}</p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(link.download ? { download: true } : {})}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Rodapé">
            <ul className="flex flex-col gap-2.5 text-sm sm:items-end">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-border mt-10 border-t pt-6">
          <p className="text-muted-foreground text-xs">
            © {year} {profile.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
