import { Cloud, Code2, Layout, Server } from "lucide-react";
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
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    category: "Backend complementar",
    categoryLabel: "Complementary backend",
    icon: Code2,
    description: "Applied in real projects (Verdict in C#, Journal in Java)",
    items: ["Java", "C#", ".NET"],
  },
  {
    category: "Cloud & Infraestrutura",
    categoryLabel: "Cloud & Infrastructure",
    icon: Cloud,
    description: "Deployment, containers, and version control",
    items: ["AWS", "Docker", "Git", "GitHub"],
  },
  {
    category: "Frontend",
    categoryLabel: "Frontend",
    icon: Layout,
    description: "Interfaces that consume the APIs",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
];
