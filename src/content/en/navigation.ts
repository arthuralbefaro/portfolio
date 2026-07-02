import { navItems as ptNavItems } from "@/data/navigation";
import type { NavItem } from "@/types";

const labels: Record<string, string> = {
  inicio: "Home",
  sobre: "About",
  stack: "Stack",
  casos: "Cases",
  certificacoes: "Certifications",
  experiencia: "Experience",
  formacao: "Education",
  contato: "Contact",
};

export const navItems: NavItem[] = ptNavItems.map((item) => {
  const label = labels[item.id];
  return label ? { ...item, label } : item;
});
