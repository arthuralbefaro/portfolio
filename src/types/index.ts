import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";

export interface NavItem {
  /** Visible label. */
  label: string;
  /** In-page anchor id (without the leading #). */
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Short handle shown in the UI (e.g. @arthuralbefaro). */
  handle?: string;
}

/** Author / profile data driving the hero, about and contact sections. */
export interface Profile {
  name: string;
  firstName: string;
  role: string;
  headline: string;
  summary: string;
  about: string[];
  highlights: string[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  resumeUrl: string;
  avatar: StaticImageData;
  company: {
    name: string;
    url: string;
  };
}

/** Technology skill categories. */
export type SkillCategory =
  | "Backend principal"
  | "Backend complementar"
  | "Cloud & Infraestrutura"
  | "Frontend";

/** A grouped set of skills shown as a card. */
export interface SkillGroup {
  category: SkillCategory;
  /** Localized display label for the category. Falls back to `category`. */
  categoryLabel?: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

/** Publication status of a case study. */
export type CaseStudyStatus =
  | "Em produção"
  | "Projeto profissional"
  | "Projeto interno"
  | "Projeto pessoal"
  | "Projeto acadêmico";

/** A named technical challenge within a case study. */
export interface CaseStudyChallenge {
  title: string;
  detail: string;
}

export interface CaseStudyProof {
  command: string;
  result: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  status: CaseStudyStatus;
  /** Localized display label for the status. Falls back to `status`. */
  statusLabel?: string;
  period?: string;
  context: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  challenges: CaseStudyChallenge[];
  result?: string[];
  demonstrates: string;
  featured?: boolean;
  proof?: CaseStudyProof;
  /** Verifiable evidence line for closed-source work (never invented). */
  evidence?: string;
  chip?: string;
  links?: {
    github?: string;
    demo?: string;
    post?: string;
  };
}

/** A professional experience entry for the timeline. */
export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  description: string;
  achievements: string[];
  stack: string[];
}

/** Academic education entry. */
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

/** Certification category, used for grouping and the category badge. */
export type CertificationCategory =
  | "Cloud"
  | "Backend"
  | "Full Stack"
  | "AI"
  | "Academic"
  | "Automation";

/** Professional certification. */
export interface Certification {
  title: string;
  issuer: string;
  category: CertificationCategory;
  /** Issue date — omit if not confirmed (never invent). */
  issuedAt?: string;
  /** Public verification URL — omit if not confirmed. */
  credentialUrl?: string;
  credentialId?: string;
  skills: string[];
  relevance: string;
  /** Lower number = higher priority in the list. */
  priority: number;
}

/** A real technical publication (post, article or doc) — never fabricated. */
export interface TechnicalPost {
  title: string;
  source: "LinkedIn" | "GitHub" | "Documentation";
  url: string;
  publishedAt?: string;
  /** slug of the related case study, if any. */
  relatedCase?: string;
  summary: string;
  technicalFocus: string[];
  whyItMatters: string;
  priority: number;
}
