import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer — AI & Automation",
    company: "Overload",
    companyUrl: "https://overloadmkt.com.br",
    period: "April 2025 — Present",
    current: true,
    description:
      "Full stack development of SaaS, systems integration, landing page creation, and development of APIs and SaaS",
    achievements: [
      "I automated CRM, onboarding, offboarding, and operations routines, eliminating approximately 20 hours of manual work per week.",
      "I built the agency's internal system in TypeScript (NestJS) and React/Next.js, with operations, commercial, and sales dashboards and performance rankings.",
      "I integrated the system with GoHighLevel, Notion, and external REST APIs, with CSAT flows and processing of dozens of records per day.",
      "I developed AI support and automation solutions using the OpenAI, Anthropic (Claude), and Gemini APIs.",
      "I maintain back-end services in TypeScript and Python: ETL and data normalization, modeling, endpoint documentation, and deployment on Linux.",
    ],
    stack: [
      "TypeScript",
      "NestJS",
      "React",
      "Next.js",
      "Python",
      "PostgreSQL",
      "GoHighLevel",
      "Notion",
      "OpenAI · Claude · Gemini",
      "Linux",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Arcabee",
    companyUrl: "https://arcabee.com.br",
    period: "2025 — Present",
    current: true,
    description:
      "Revit content platform with an Angular front-end, an ASP.NET API, and production infrastructure on AWS",
    achievements: [
      "Development of a platform with more than 113,000 Revit materials and families, with an Angular front-end, an ASP.NET (C#/.NET) API, and a content ingestion pipeline.",
      "Development of a Revit plugin in C# and .NET, integrated with the platform's content.",
      "Production infrastructure on AWS (S3, EC2, Route 53) and Cloudflare R2, with part of the services on a VPS.",
      "Deployment with Docker and a CI/CD pipeline via GitHub.",
    ],
    stack: [
      "Angular",
      "C# & .NET",
      "ASP.NET",
      "AWS (S3, EC2, Route 53)",
      "Cloudflare R2",
      "Docker",
      "CI/CD",
      "VPS",
    ],
  },
];
