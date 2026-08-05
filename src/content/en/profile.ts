import avatar from "@/assets/profile.png";
import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Arthur Albefaro",
  firstName: "Arthur",
  role: "Full-Stack Developer · Back-end, Automation & Systems Integration",
  headline:
    "I build backends where the rules that cannot break are enforced in the database and proven with tests.",
  summary:
    "Backend and full stack developer working with TypeScript, C#, Java, and React.",
  about: [
    "I work on the part of the backend that tends to go wrong: keeping data correct. I build APIs where the rules that cannot break (the values adding up, one client never seeing another's data, a record that cannot be changed after it is written) are enforced in the database, not just in the application, and I test that against a real PostgreSQL by trying to break the rules. I also build the interface that consumes those APIs.",
    "It shows in my projects: Journal, a double-entry ledger in Java and Spring Boot that prevents negative balances even under simultaneous withdrawals; Verdict, a multi-tenant authorization service in C# and .NET with isolation via Row-Level Security and an immutable audit log; and Courier, a webhook delivery gateway in TypeScript and NestJS with idempotency and a Postgres-based queue.",
    "At Overload, I built the agency's internal system and automated CRM, onboarding, and operations routines, eliminating approximately 20 hours of manual work per week, and I maintain the back-end services in TypeScript and Python. At Arcabee, I work full stack on a Revit content platform with more than 113,000 materials and families, with an Angular front-end, an ASP.NET API, and production infrastructure on AWS. I am pursuing a Bachelor's degree in Computer Science at Universidade de Vila Velha.",
  ],
  highlights: [
    "Business rules enforced in the database: constraints, triggers, and Row-Level Security in PostgreSQL",
    "Concurrency: preventing race conditions with locks and transactions",
    "Backend in TypeScript (Node.js/NestJS), C# (.NET/ASP.NET), Java (Spring Boot), and PHP (Laravel)",
    "Integration tests against a real database with Testcontainers",
    "Frontend in React and Next.js consuming the APIs",
    "Data modeling and cross-platform integrations via API",
    "Automation of operational and CRM routines, with AI via the OpenAI, Anthropic, and Gemini APIs",
    "Full stack in Angular and ASP.NET, with infrastructure on AWS, Docker, and CI/CD",
  ],
  email: "arthuralbefaroec@gmail.com",
  phone: "+55 27 99952-1684",
  location: "Vila Velha, ES, Brazil",
  availability: "Full-Stack · Automation · Integration",
  resumeUrl: "/CV_Arthur_Albefaro_EN.pdf",
  avatar,
  company: {
    name: "Overload",
    url: "https://overloadmkt.com.br",
  },
};
