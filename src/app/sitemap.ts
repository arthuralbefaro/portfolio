import type { MetadataRoute } from "next";

import { locales } from "@/i18n/config";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
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
}
