import type { Certification } from "@/types";

/**
 * Real certifications only. Never invent titles, issuers, dates, credential IDs
 * or verification URLs. Leave `issuedAt` / `credentialUrl` / `credentialId`
 * undefined until confirmed. Use honest, non-senior language in `relevance`.
 */
export const certifications: Certification[] = [
  {
    title: "AWS Cloud Solutions Architect",
    issuer: "Coursera / Amazon Web Services",
    category: "Cloud",
    skills: [
      "Cloud architecture",
      "AWS core services",
      "IAM",
      "Networking",
      "Compute",
      "Storage",
      "Security fundamentals",
      "Scalability",
      "High availability",
    ],
    relevance:
      "Reforça fundamentos de arquitetura em nuvem, serviços centrais da AWS, segurança, redes, computação, armazenamento e desenho de soluções com maior disponibilidade e escalabilidade",
    priority: 1,
  },
  {
    title: "Back-End Development with .NET",
    issuer: "Microsoft",
    category: "Backend",
    skills: [
      ".NET",
      "C#",
      "Backend development",
      "APIs",
      "Object-oriented programming",
      "Application architecture",
    ],
    relevance:
      "Fortalece a base em desenvolvimento backend com .NET, C#, APIs e organização de aplicações orientadas a objetos",
    priority: 2,
  },
  {
    title: "Advanced Java",
    issuer: "LearnQuest",
    category: "Backend",
    skills: [
      "Java",
      "OOP",
      "Backend foundations",
      "Collections",
      "Exception handling",
      "Application structure",
    ],
    relevance:
      "Amplia a base em Java e orientação a objetos, reforçando os fundamentos para vagas backend em Java",
    priority: 3,
  },
  {
    title: "Advanced C# Language Features & Object-Oriented Programming",
    issuer: "Microsoft",
    category: "Backend",
    skills: [
      "C#",
      "OOP",
      "Advanced language features",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Backend foundations",
    ],
    relevance:
      "Reforça o uso de recursos avançados da linguagem C# e fundamentos de orientação a objetos aplicados ao desenvolvimento backend",
    priority: 4,
  },
  {
    title: "IBM AI Developer",
    issuer: "IBM",
    category: "AI",
    skills: [
      "AI fundamentals",
      "Python",
      "APIs",
      "Automation",
      "AI-assisted applications",
      "Data handling",
      "Backend integrations",
    ],
    relevance:
      "Complementa a formação técnica com fundamentos de desenvolvimento aplicado a IA, automações, APIs e integração de recursos inteligentes em aplicações",
    priority: 5,
  },
];
