import { ExternalLink } from "lucide-react";

import { Block, Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { MetaLabel } from "@/components/ui/meta-label";
import { TagList } from "@/components/ui/tag-list";
import type { Dictionary } from "@/content/dictionary";

interface CertificationsProps {
  dict: Dictionary;
}

export function Certifications({ dict }: CertificationsProps) {
  const { certifications, ui } = dict;
  const sorted = [...certifications].sort((a, b) => a.priority - b.priority);

  return (
    <Section id="certificacoes" mark={ui.certifications.mark}>
      <SectionHeading
        title={ui.certifications.title}
        description={ui.certifications.description}
      />

      <Block width="prose">
        <ul>
          {sorted.map((cert, index) => (
            <li
              key={cert.title}
              data-reveal
              style={{ transitionDelay: `${Math.min(index, 6) * 50}ms` }}
              className="border-border border-t py-6"
            >
              <MetaLabel>{cert.issuer}</MetaLabel>

              <div className="mt-2 flex flex-wrap items-center gap-4">
                <h3 className="font-display text-body font-medium">
                  {cert.title}
                </h3>
                <Badge variant="accent">{cert.category}</Badge>
              </div>

              <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
                {cert.relevance}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <TagList items={cert.skills} />
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-emphasis text-meta inline-flex items-center gap-2 font-mono transition-colors"
                  >
                    <ExternalLink aria-hidden className="size-3.5" />
                    {ui.certifications.viewCredential}
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Block>
    </Section>
  );
}
