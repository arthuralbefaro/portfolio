import { ExternalLink } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/certifications";

const sorted = [...certifications].sort((a, b) => a.priority - b.priority);

export function Certifications() {
  return (
    <Section id="certificacoes">
      <SectionHeading
        mark="// certificações"
        title="Certificações"
        description="Certificações e cursos voltados a backend, cloud e fundamentos de IA"
      />

      <div className="border-border border-t">
        {sorted.map((cert) => (
          <div
            key={cert.title}
            className="border-border grid gap-4 border-b py-7 lg:grid-cols-[1fr_1.4fr]"
          >
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display font-medium">{cert.title}</h3>
                <Badge variant="accent">{cert.category}</Badge>
              </div>
              <p className="text-dim mt-1 font-mono text-xs">{cert.issuer}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emphasis mt-3 inline-flex items-center gap-1.5 font-mono text-xs transition-colors"
                >
                  <ExternalLink className="size-3.5" />
                  ver credencial
                </a>
              )}
            </div>

            <div>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                {cert.relevance}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
