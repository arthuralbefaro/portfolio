import { Cloud, Code2, Layout, Server } from "lucide-react";
import type { SkillGroup } from "@/types";

/**
 * Stack organizada por foco: o backend principal é o centro do perfil; Java/C#/
 * .NET aparecem como base complementar, agora aplicada em projetos reais (Verdict,
 * Journal), e Cloud e Frontend completam a atuação full stack. Mantida enxuta de
 * propósito.
 */
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
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    category: "Backend complementar",
    icon: Code2,
    description: "Aplicado em projetos reais (Verdict em C#, Journal em Java)",
    items: ["Java", "C#", ".NET"],
  },
  {
    category: "Cloud & Infraestrutura",
    icon: Cloud,
    description: "Deploy, containers e versionamento",
    items: ["AWS", "Docker", "Git", "GitHub"],
  },
  {
    category: "Frontend",
    icon: Layout,
    description: "Interfaces para consumir as APIs",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];
