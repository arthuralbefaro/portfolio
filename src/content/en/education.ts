import { education as ptEducation } from "@/data/education";
import type { Education } from "@/types";

const degrees: Record<string, string> = {
  "Bacharelado em Ciência da Computação": "Bachelor's in Computer Science",
};

export const education: Education[] = ptEducation.map((item) => {
  const degree = degrees[item.degree];
  return degree ? { ...item, degree } : item;
});

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "Spanish", level: "Intermediate" },
] as const;
