import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Analista de Automação · Desenvolvedor Backend",
    company: "Overload",
    companyUrl: "https://overloadmkt.com.br",
    period: "2026 — Atual",
    current: true,
    description:
      "Desenvolvimento de serviços de backend e automações que integram as plataformas internas via API",
    achievements: [
      "Construo serviços de backend em TypeScript (NestJS) e Python que consomem e expõem APIs REST.",
      "Implementei a integração GoHighLevel → Notion: extração via API, transformação dos dados e escrita no Notion.",
      "Normalizo dados não padronizados em PostgreSQL para que possam ser consultados e usados em dashboards.",
      "Substituí processos manuais por rotinas automatizadas de sincronização entre sistemas.",
    ],
    stack: ["TypeScript", "NestJS", "Python", "PostgreSQL", "Notion API"],
  },
];
