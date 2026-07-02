/**
 * Global site configuration. Single source of truth for URLs and metadata
 * used across SEO, structured data, sitemap and the layout shell.
 */
export const siteConfig = {
  name: "Arthur Albefaro",
  title: "Arthur Albefaro | Desenvolvedor Backend & Full Stack",
  description:
    "Desenvolvedor full stack que constrói backend onde a correção é imposta no banco de dados e provada com testes. TypeScript, C# e Java.",
  url: "https://arthuralbefaro.com",
  locale: "pt-BR",
  role: "Desenvolvedor Backend & Full Stack",
  ogImage: "/opengraph-image",
} as const;

export type SiteConfig = typeof siteConfig;
