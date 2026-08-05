import type { MetadataRoute } from "next";

import { getDictionary } from "@/content/dictionary";
import { locales } from "@/i18n/config";
import { contentLastModified, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(contentLastModified);

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
    alternates: {
      languages: {
        "pt-BR": `${siteConfig.url}/pt`,
        en: `${siteConfig.url}/en`,
      },
    },
  }));

  const cases: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getDictionary(locale).caseStudies.map((study) => ({
      url: `${siteConfig.url}/${locale}/cases/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "pt" ? 0.8 : 0.7,
      alternates: {
        languages: {
          "pt-BR": `${siteConfig.url}/pt/cases/${study.slug}`,
          en: `${siteConfig.url}/en/cases/${study.slug}`,
        },
      },
    })),
  );

  return [...home, ...cases];
}
