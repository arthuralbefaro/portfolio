import { skillGroups as ptSkillGroups } from "@/data/skills";
import type { SkillGroup } from "@/types";

const overrides: Record<
  string,
  { categoryLabel: string; description: string }
> = {
  "Backend principal": {
    categoryLabel: "Core backend",
    description: "The center of my day-to-day work",
  },
  "Backend complementar": {
    categoryLabel: "Complementary backend",
    description: "Applied in real projects (Verdict in C#, Journal in Java)",
  },
  "Cloud & Infraestrutura": {
    categoryLabel: "Cloud & Infrastructure",
    description: "Deployment, containers, and version control",
  },
  Frontend: {
    categoryLabel: "Frontend",
    description: "Interfaces that consume the APIs",
  },
};

export const skillGroups: SkillGroup[] = ptSkillGroups.map((group) => {
  const override = overrides[group.category];
  return override ? { ...group, ...override } : group;
});
