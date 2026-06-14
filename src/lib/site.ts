/**
 * Global site configuration. Single source of truth for URLs and metadata
 * used across SEO, structured data, sitemap and the layout shell.
 */
export const siteConfig = {
  name: "Arthur Albefaro",
  title: "Arthur Albefaro — Desenvolvedor Backend & Full Stack",
  description:
    "Desenvolvedor backend e full stack, trabalhando com APIs, automações e integração de sistemas em TypeScript (NestJS), Python e AWS.",
  url: "https://arthuralbefaro.com",
  locale: "pt-BR",
  role: "Desenvolvedor Backend & Full Stack",
  ogImage: "/opengraph-image",
  keywords: [
    "Arthur Albefaro",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Backend",
    "Engenheiro de Software",
    "NestJS",
    "TypeScript",
    "Python",
    "Node.js",
    "AWS",
    "APIs",
    "Automação",
    "Portfólio",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
