import { caseStudies as ptCaseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types";

const internalManagementSystem: CaseStudy = {
  slug: "sistema-interno-gestao",
  title: "Internal management system",
  chip: "full-stack · production",
  tagline:
    "A full-stack internal system used by a marketing agency to manage its client portfolio, sales, and operations, with an AI layer that supports decisions.",
  status: "Projeto profissional",
  statusLabel: "Professional project",
  period: "2026",
  featured: true,
  context:
    "The operation was scattered across spreadsheets, the CRM, and scattered chats. There was no single place where the team could see portfolio health, sales progress, and each squad's workload. Information originated in different tools and was cross-referenced by hand.",
  problem:
    "Centralize client, sales, and operations management into a single system, with data coming from several external sources, access control by role and by squad, and AI support to turn scattered data into action, all with synchronized and consistent information.",
  solution:
    "A full-stack system with a TypeScript (NestJS) and Python backend and a React frontend, over PostgreSQL. It brings together an executive dashboard, squad-based task management, a CRM with lead qualification for SDRs, portfolio and client health scoring, and an internal team chat. It integrates external sources via API and uses an AI layer that ingests each client's history to suggest actions and flag risk.",
  architecture: [
    "A NestJS and Python backend exposing APIs consumed by a React frontend, with access control by role and by squad.",
    "PostgreSQL as the central store, with data synchronized from external platforms (CRM, ad platforms) via API.",
    "WhatsApp integration via API to read conversation context.",
    "An AI layer integrating multiple LLM providers (Anthropic Claude and OpenAI) that ingests each client's history to compute client health, suggest actions, and support lead qualification.",
    "Modules separated by area (management, operations, intelligence) with unified navigation and search.",
  ],
  technologies: [
    "TypeScript",
    "NestJS",
    "Python",
    "C# & .NET",
    "React",
    "PostgreSQL",
    "NoSQL",
    "Amazon Web Services",
    "API integrations (CRM, Meta Ads, Google Ads, WhatsApp)",
    "Anthropic Claude",
    "OpenAI",
  ],
  challenges: [
    {
      title: "Many sources, one place",
      detail:
        "Data came from the CRM, ad platforms, and conversations, each in its own format. The system synchronizes and normalizes everything into a consistent model in Postgres.",
    },
    {
      title: "Access by role and by squad",
      detail:
        "Each person sees only what belongs to their scope. Permission control separates what a manager, an SDR, and an admin can see, without mixing data across squads.",
    },
    {
      title: "AI applied to decisions, not text",
      detail:
        "Instead of a generic chat, the AI reads each client's real case and returns something actionable: a health score, a suggested action, a risk alert. It uses more than one LLM provider rather than being locked to a single one.",
    },
    {
      title: "A system in use",
      detail:
        "Not a prototype. The team uses it daily, so stability and data consistency are requirements, not details.",
    },
  ],
  demonstrates:
    "A real, in-production full-stack system integrating several external sources, with access control, AI applied to decisions, and a team using it daily.",
};

const translations: Record<string, CaseStudy> = {
  [internalManagementSystem.slug]: internalManagementSystem,
};

// TODO: translate the remaining case studies. Entries without an English
// translation fall back to the Portuguese content.
export const caseStudies: CaseStudy[] = ptCaseStudies.map(
  (study) => translations[study.slug] ?? study,
);
