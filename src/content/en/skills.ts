import { Bot, Cloud, Code2, Database, Layout, Server } from "lucide-react";
import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend principal",
    categoryLabel: "Core backend",
    icon: Server,
    description: "The center of my day-to-day work",
    items: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "C# & .NET",
      "ASP.NET",
      "REST APIs",
    ],
  },
  {
    category: "Backend complementar",
    categoryLabel: "Complementary backend",
    icon: Code2,
    description: "Languages and frameworks I also use on the backend",
    items: ["Java", "Spring Boot", "PHP", "Laravel"],
  },
  {
    category: "Dados",
    categoryLabel: "Data",
    icon: Database,
    description: "Modeling, querying, and storage",
    items: ["PostgreSQL", "SQL", "PL/SQL", "MySQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    category: "Cloud & Infraestrutura",
    categoryLabel: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Deployment, containers, and version control",
    items: [
      "AWS (S3, EC2, Route 53)",
      "Cloudflare R2",
      "VPS",
      "Docker",
      "CI/CD",
      "Linux",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "Frontend",
    categoryLabel: "Frontend",
    icon: Layout,
    description: "Interfaces that consume the APIs",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "IA & Automação",
    categoryLabel: "AI & Automation",
    icon: Bot,
    description: "Integrations and automation of operational routines",
    items: [
      "OpenAI",
      "Anthropic Claude",
      "Gemini",
      "GoHighLevel",
      "Notion API",
      "ETL",
    ],
  },
];
