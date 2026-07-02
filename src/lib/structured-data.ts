import { getDictionary } from "@/content/dictionary";
import { defaultLocale, localeHtmlLang } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { socials } from "@/data/socials";
import { siteConfig } from "@/lib/site";

/** Builds the schema.org Person JSON-LD for rich search results. */
export function getPersonJsonLd(locale: Locale = defaultLocale) {
  const { profile, skillGroups, education, certifications, ui } =
    getDictionary(locale);
  const skills = skillGroups.flatMap((group) => group.items);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: ui.meta.description,
    inLanguage: localeHtmlLang[locale],
    email: `mailto:${profile.email}`,
    url: `${siteConfig.url}/${locale}`,
    image: `${siteConfig.url}/${locale}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vila Velha",
      addressRegion: "ES",
      addressCountry: "BR",
    },
    worksFor: {
      "@type": "Organization",
      name: profile.company.name,
      url: profile.company.url,
    },
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
    })),
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.title,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
    knowsAbout: Array.from(new Set(skills)),
    sameAs: socials
      .filter((s) => s.label !== "Email" && s.label !== "WhatsApp")
      .map((s) => s.href),
  };
}
