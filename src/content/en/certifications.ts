import type { Certification } from "@/types";

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
      "Reinforces cloud architecture fundamentals, core AWS services, security, networking, compute, storage, and designing solutions with higher availability and scalability",
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
      "Strengthens the foundation in backend development with .NET, C#, APIs, and structuring object-oriented applications",
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
      "Broadens the foundation in Java and object orientation, reinforcing the fundamentals for backend roles in Java",
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
      "Reinforces the use of advanced C# language features and object-orientation fundamentals applied to backend development",
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
      "Complements the technical background with fundamentals of AI-applied development, automation, APIs, and integrating intelligent features into applications",
    priority: 5,
  },
];
