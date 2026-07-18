import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full Stack",
    company: "Overload",
    companyUrl: "https://overloadmkt.com.br",
    period: "2026 — Atual",
    current: true,
    description:
      "Desenvolvimento Full Stack de SaaS, integração de sistemas, criação de landing pages e desenvolvimento de APIs e SaaS",
    achievements: [
      "Construo serviços de backend em TypeScript (Node.js/NestJS), C# .NET e Java",
      "Implementei a integração GoHighLevel → Notion: extração via API, transformação dos dados e escrita no Notion.",
      "Normalizo dados não padronizados em PostgreSQL para que possam ser consultados e usados em dashboards.",
      "Substituí processos manuais por rotinas automatizadas de sincronização entre sistemas.",
    ],
    stack: [
      "TypeScript",
      "NestJS",
      "Python",
      "C# & .NET",
      "PHP",
      "PostgreSQL",
      "NoSQL",
    ],
  },
];
