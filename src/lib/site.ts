/**
 * Global site configuration. Single source of truth for URLs and metadata
 * used across SEO, structured data, sitemap and the layout shell.
 */
export const GITHUB_USERNAME = "arthuralbefaro";

export const contentLastModified = "2026-08-05";

export const siteConfig = {
  name: "Arthur Albefaro",
  title: "Arthur Albefaro | Full-Stack, Automações & Integração",
  description:
    "Desenvolvedor full-stack em back-end, automações e integração de sistemas. Correção imposta no banco e provada com testes. TypeScript, Python, C# e .NET.",
  url: "https://arthuralbefaro.com",
  locale: "pt-BR",
  role: "Desenvolvedor Full-Stack · Back-end, Automações & Integração de Sistemas",
  ogImage: "/opengraph-image",
} as const;

export type SiteConfig = typeof siteConfig;
