import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { socials } from "@/data/socials";
import { siteConfig } from "@/lib/site";

/** Builds the schema.org Person JSON-LD for rich search results. */
export function getPersonJsonLd() {
  const skills = skillGroups.flatMap((group) => group.items);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: siteConfig.description,
    email: `mailto:${profile.email}`,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
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
    sameAs: socials.filter((s) => s.label !== "Email").map((s) => s.href),
  };
}
