import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Layers,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { certifications } from "@/data/certifications";
import type { CertificationCategory } from "@/types";

const categoryIcon: Record<CertificationCategory, LucideIcon> = {
  Cloud: Cloud,
  Backend: Code2,
  "Full Stack": Layers,
  AI: BrainCircuit,
  Academic: GraduationCap,
  Automation: Workflow,
};

const sorted = [...certifications].sort((a, b) => a.priority - b.priority);

export function Certifications() {
  return (
    <Section id="certificacoes">
      <SectionHeading
        eyebrow="Certificações"
        title="Certificações"
        description="Certificações e cursos voltados a backend, cloud e fundamentos de IA"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {sorted.map((cert, index) => {
          const Icon = categoryIcon[cert.category] ?? Database;
          return (
            <Reveal key={cert.title} delay={index * 0.05}>
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="border-border bg-muted/50 flex size-10 shrink-0 items-center justify-center rounded-lg border">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <Badge variant="accent">{cert.category}</Badge>
                </div>

                <p className="text-muted-foreground mt-4 text-sm leading-relaxed text-pretty">
                  {cert.relevance}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {(cert.credentialUrl || cert.issuedAt) && (
                  <div className="border-border mt-5 flex items-center justify-between border-t pt-4 text-sm">
                    {cert.issuedAt ? (
                      <span className="text-muted-foreground">
                        {cert.issuedAt}
                      </span>
                    ) : (
                      <span />
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-medium transition-colors"
                      >
                        <ExternalLink className="size-4" />
                        Ver credencial
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
