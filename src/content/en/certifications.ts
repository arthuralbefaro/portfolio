import { certifications as ptCertifications } from "@/data/certifications";
import type { Certification } from "@/types";

const relevance: Record<string, string> = {
  "AWS Cloud Solutions Architect":
    "Reinforces cloud architecture fundamentals, core AWS services, security, networking, compute, storage, and designing solutions with higher availability and scalability",
  "Back-End Development with .NET":
    "Strengthens the foundation in backend development with .NET, C#, APIs, and structuring object-oriented applications",
  "Advanced Java":
    "Broadens the foundation in Java and object orientation, reinforcing the fundamentals for backend roles in Java",
  "Advanced C# Language Features & Object-Oriented Programming":
    "Reinforces the use of advanced C# language features and object-orientation fundamentals applied to backend development",
  "IBM AI Developer":
    "Complements the technical background with fundamentals of AI-applied development, automation, APIs, and integrating intelligent features into applications",
};

export const certifications: Certification[] = ptCertifications.map((cert) => {
  const text = relevance[cert.title];
  return text ? { ...cert, relevance: text } : cert;
});
