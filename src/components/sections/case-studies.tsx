import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from "@/content/dictionary";
import type { UiDictionary } from "@/content/ui/types";
import type { CaseStudy } from "@/types";

type CaseStudiesUi = UiDictionary["caseStudies"];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-dim mb-2 font-mono text-xs tracking-[0.14em] uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}

function ProofStrip({ command, result }: { command: string; result: string }) {
  return (
    <div className="bg-invert-bg text-invert-fg mt-6 rounded-sm px-4 py-3 font-mono text-sm leading-relaxed">
      <div className="text-invert-fg/70">
        <span className="text-invert-fg font-bold">$</span> {command}
      </div>
      <div className="mt-1 font-medium">
        <span aria-hidden>✓</span> {result}
      </div>
    </div>
  );
}

function CaseStudyCard({ study, ui }: { study: CaseStudy; ui: CaseStudiesUi }) {
  return (
    <article className="border-emphasis border-l-2 pl-6 sm:pl-8">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {study.title}
          </h3>
          {study.chip && (
            <span className="text-muted-foreground border-border rounded-sm border px-2 py-0.5 font-mono text-xs">
              {study.chip}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 font-mono text-sm">
          {study.links?.github && (
            <a
              href={study.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-1.5 transition-colors"
            >
              {ui.links.code}
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {study.links?.demo && (
            <a
              href={study.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-1.5 transition-colors"
            >
              {ui.links.demo}
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {study.links?.post && (
            <a
              href={study.links.post}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-1.5 transition-colors"
            >
              {ui.links.post}
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>

      <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-3 font-mono text-xs">
        <span>{study.statusLabel ?? study.status}</span>
        {study.period && (
          <>
            <span aria-hidden>·</span>
            <span>{study.period}</span>
          </>
        )}
      </div>

      <p className="text-muted-foreground mt-4 max-w-3xl text-pretty">
        {study.tagline}
      </p>

      {study.proof && (
        <ProofStrip command={study.proof.command} result={study.proof.result} />
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Field label={ui.fields.context}>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {study.context}
            </p>
          </Field>
          <Field label={ui.fields.problem}>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {study.problem}
            </p>
          </Field>
          <Field label={ui.fields.solution}>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {study.solution}
            </p>
          </Field>
        </div>

        <div className="space-y-6">
          <Field label={ui.fields.architecture}>
            <ol className="space-y-2.5">
              {study.architecture.map((item, index) => (
                <li
                  key={item.slice(0, 28)}
                  className="text-muted-foreground flex gap-3 text-sm leading-relaxed"
                >
                  <span className="text-dim font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </Field>

          <Field label={ui.fields.challenges}>
            <ul className="space-y-3">
              {study.challenges.map((challenge) => (
                <li key={challenge.title} className="text-sm">
                  <span className="text-foreground font-medium">
                    {challenge.title}.
                  </span>{" "}
                  <span className="text-muted-foreground leading-relaxed">
                    {challenge.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Field>

          <Field label={ui.fields.technologies}>
            <div className="flex flex-wrap gap-1.5">
              {study.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </Field>
        </div>
      </div>

      <div className="border-border mt-8 grid gap-8 border-t pt-6 lg:grid-cols-2">
        {study.result && study.result.length > 0 && (
          <Field label={ui.fields.result}>
            <ul className="space-y-2">
              {study.result.map((item) => (
                <li
                  key={item.slice(0, 28)}
                  className="text-muted-foreground flex items-start gap-2 text-sm"
                >
                  <span
                    aria-hidden
                    className="bg-muted-foreground mt-1.5 size-1 shrink-0 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Field>
        )}
        <Field label={ui.fields.demonstrates}>
          <p className="text-foreground/90 text-sm leading-relaxed text-pretty">
            {study.demonstrates}
          </p>
        </Field>
      </div>
    </article>
  );
}

interface CaseStudiesProps {
  dict: Dictionary;
}

export function CaseStudies({ dict }: CaseStudiesProps) {
  const { caseStudies, ui } = dict;

  return (
    <Section id="casos">
      <SectionHeading
        mark={ui.caseStudies.mark}
        title={ui.caseStudies.title}
        description={ui.caseStudies.description}
      />

      <div className="space-y-16">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} ui={ui.caseStudies} />
        ))}
      </div>
    </Section>
  );
}
