import { ExternalLink } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/content/dictionary";

interface CertificationsProps {
  dict: Dictionary;
}

export function Certifications({ dict }: CertificationsProps) {
  const { certifications, ui } = dict;
  const sorted = [...certifications].sort((a, b) => a.priority - b.priority);

  return (
    <Section id="certificacoes">
      <SectionHeading
        mark={ui.certifications.mark}
        title={ui.certifications.title}
        description={ui.certifications.description}
      />

      <div className="border-border border-t">
        {sorted.map((cert, index) => (
          <div
            key={cert.title}
            data-reveal
            style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
            className="border-border grid gap-4 border-b py-8 lg:grid-cols-[1fr_1.4fr]"
          >
            <div>
              <div className="flex items-center gap-4">
                <h3 className="font-display font-medium">{cert.title}</h3>
                <Badge variant="accent">{cert.category}</Badge>
              </div>
              <p className="text-muted-foreground mt-1 font-mono text-xs">
                {cert.issuer}
              </p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-emphasis mt-4 inline-flex items-center gap-2 font-mono text-xs transition-colors"
                >
                  <ExternalLink className="size-3.5" />
                  {ui.certifications.viewCredential}
                </a>
              )}
            </div>

            <div>
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                {cert.relevance}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
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
