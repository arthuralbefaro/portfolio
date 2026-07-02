import type { Education } from "@/types";

export const education: Education[] = [
  {
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade de Vila Velha (UVV)",
    period: "2026 — 2029"
  },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Avançado" },
  { name: "Espanhol", level: "Intermediário" },
] as const;
