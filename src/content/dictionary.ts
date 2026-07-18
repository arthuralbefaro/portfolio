import type { Locale } from "@/i18n/config";
import type { UiDictionary } from "@/content/ui/types";
import type {
  CaseStudy,
  Certification,
  Education,
  Experience,
  NavItem,
  Profile,
  SkillGroup,
  TechnicalPost,
} from "@/types";

import { ptUi } from "@/content/ui/pt";
import { enUi } from "@/content/ui/en";

import { profile as ptProfile } from "@/data/profile";
import { navItems as ptNavItems } from "@/data/navigation";
import { skillGroups as ptSkillGroups } from "@/data/skills";
import { caseStudies as ptCaseStudies } from "@/data/case-studies";
import { certifications as ptCertifications } from "@/data/certifications";
import {
  education as ptEducation,
  languages as ptLanguages,
} from "@/data/education";
import { experiences as ptExperiences } from "@/data/experience";
import { technicalPosts as ptTechnicalPosts } from "@/data/technical-posts";

import { profile as enProfile } from "@/content/en/profile";
import { navItems as enNavItems } from "@/content/en/navigation";
import { skillGroups as enSkillGroups } from "@/content/en/skills";
import { caseStudies as enCaseStudies } from "@/content/en/case-studies";
import { certifications as enCertifications } from "@/content/en/certifications";
import {
  education as enEducation,
  languages as enLanguages,
} from "@/content/en/education";
import { experiences as enExperiences } from "@/content/en/experience";
import { technicalPosts as enTechnicalPosts } from "@/content/en/technical-posts";

export interface Language {
  name: string;
  level: string;
}

export interface Dictionary {
  profile: Profile;
  navItems: NavItem[];
  skillGroups: SkillGroup[];
  caseStudies: CaseStudy[];
  certifications: Certification[];
  education: Education[];
  languages: readonly Language[];
  experiences: Experience[];
  technicalPosts: TechnicalPost[];
  ui: UiDictionary;
}

const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    profile: ptProfile,
    navItems: ptNavItems,
    skillGroups: ptSkillGroups,
    caseStudies: ptCaseStudies,
    certifications: ptCertifications,
    education: ptEducation,
    languages: ptLanguages,
    experiences: ptExperiences,
    technicalPosts: ptTechnicalPosts,
    ui: ptUi,
  },
  en: {
    profile: enProfile,
    navItems: enNavItems,
    skillGroups: enSkillGroups,
    caseStudies: enCaseStudies,
    certifications: enCertifications,
    education: enEducation,
    languages: enLanguages,
    experiences: enExperiences,
    technicalPosts: enTechnicalPosts,
    ui: enUi,
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
