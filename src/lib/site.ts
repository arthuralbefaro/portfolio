/**
 * Global site configuration. Single source of truth for URLs and metadata
 * used across SEO, structured data, sitemap and the layout shell.
 */
export const GITHUB_USERNAME = "arthuralbefaro";

export const contentLastModified = "2026-08-04";

export const siteConfig = {
  name: "Arthur Albefaro",
  title:
    "Arthur Albefaro | Desenvolvedor Full-Stack · Back-end, Automações & Integração de Sistemas",
  description:
    "Desenvolvedor full stack que constrói backend onde a correção é imposta no banco de dados e provada com testes. TypeScript, C# e Java.",
  url: "https://arthuralbefaro.com",
  locale: "pt-BR",
  role: "Desenvolvedor Full-Stack · Back-end, Automações & Integração de Sistemas",
  ogImage: "/opengraph-image",
} as const;

export type SiteConfig = typeof siteConfig;
