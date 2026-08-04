import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full Stack — IA & Automações",
    company: "Overload",
    companyUrl: "https://overloadmkt.com.br",
    period: "Abril de 2025 — Atual",
    current: true,
    description:
      "Desenvolvimento Full Stack de SaaS, integração de sistemas, criação de landing pages e desenvolvimento de APIs e SaaS",
    achievements: [
      "Automatizei rotinas de CRM, onboarding, offboarding e operação, eliminando aproximadamente 20 horas de trabalho manual por semana.",
      "Construí o sistema interno da agência em TypeScript (NestJS) e React/Next.js, com dashboards operacionais, comerciais e de vendas e rankings de performance.",
      "Integrei o sistema ao GoHighLevel, ao Notion e a APIs REST externas, com fluxos de CSAT e processamento de dezenas de registros por dia.",
      "Desenvolvi soluções de atendimento e automação com IA usando as APIs da OpenAI, da Anthropic (Claude) e do Gemini.",
      "Mantenho serviços back-end em TypeScript e Python: ETL e normalização de dados, modelagem, documentação de endpoints e deploy em Linux.",
    ],
    stack: [
      "TypeScript",
      "NestJS",
      "React",
      "Next.js",
      "Python",
      "PostgreSQL",
      "GoHighLevel",
      "Notion",
      "OpenAI · Claude · Gemini",
      "Linux",
    ],
  },
  {
    role: "Desenvolvedor Full Stack",
    company: "Arcabee",
    period: "2025 — Atual",
    current: true,
    description:
      "Plataforma de conteúdo para Revit com front-end em Angular, API em ASP.NET e infraestrutura em produção na AWS",
    achievements: [
      "Desenvolvimento de plataforma com mais de 113.000 materiais e famílias do Revit, com front-end em Angular, API em ASP.NET (C#/.NET) e pipeline de ingestão de conteúdo.",
      "Desenvolvimento de plugin para o Revit em C# e .NET, integrado ao conteúdo da plataforma.",
      "Infraestrutura em produção na AWS (S3, EC2, Route 53) e Cloudflare R2, com parte dos serviços em VPS.",
      "Deploy com Docker e pipeline de CI/CD via GitHub.",
    ],
    stack: [
      "Angular",
      "C# & .NET",
      "ASP.NET",
      "AWS (S3, EC2, Route 53)",
      "Cloudflare R2",
      "Docker",
      "CI/CD",
      "VPS",
    ],
  },
];
