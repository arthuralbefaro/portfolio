import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Overload",
    companyUrl: "https://overloadmkt.com.br",
    period: "2026 — Present",
    current: true,
    description:
      "Full stack development of SaaS, systems integration, landing page creation, and development of APIs and SaaS",
    achievements: [
      "I build backend services in TypeScript (Node.js/NestJS), C# .NET, and Java",
      "I implemented the GoHighLevel → Notion integration: extraction via API, data transformation, and writing to Notion.",
      "I normalize non-standardized data in PostgreSQL so it can be queried and used in dashboards.",
      "I replaced manual processes with automated synchronization routines between systems.",
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
