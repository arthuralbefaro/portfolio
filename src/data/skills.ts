import { Bot, Cloud, Code2, Database, Layout, Server } from "lucide-react";
import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend principal",
    icon: Server,
    description: "Centro do meu trabalho no dia a dia",
    items: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "C# & .NET",
      "ASP.NET",
      "APIs REST",
    ],
  },
  {
    category: "Backend complementar",
    icon: Code2,
    description: "Linguagens e frameworks que também uso no backend",
    items: ["Java", "Spring Boot", "PHP", "Laravel"],
  },
  {
    category: "Dados",
    icon: Database,
    description: "Modelagem, consulta e armazenamento",
    items: [
      "PostgreSQL",
      "SQL",
      "PL/SQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQLite",
    ],
  },
  {
    category: "Cloud & Infraestrutura",
    icon: Cloud,
    description: "Deploy, containers e versionamento",
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
    icon: Layout,
    description: "Interfaces para consumir as APIs",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "IA & Automação",
    icon: Bot,
    description: "Integrações e automação de rotinas operacionais",
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
