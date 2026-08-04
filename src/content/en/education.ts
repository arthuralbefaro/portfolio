import type { Education } from "@/types";

export const education: Education[] = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "Universidade de Vila Velha (UVV)",
    period: "In progress · expected 2029",
  },
];

export const languages = [
  { name: "Portuguese", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "Spanish", level: "Intermediate" },
] as const;
