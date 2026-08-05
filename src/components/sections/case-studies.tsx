import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { Section, SectionHeading } from "@/components/section";
import { CaseStudyDisclosure } from "@/components/sections/case-study-disclosure";
import { BulletList } from "@/components/ui/bullet-list";
import { MetaLabel } from "@/components/ui/meta-label";
import { TagList } from "@/components/ui/tag-list";
import type { Dictionary } from "@/content/dictionary";
import type { UiDictionary } from "@/content/ui/types";
import type { CaseStudy } from "@/types";

type CaseStudiesUi = UiDictionary["caseStudies"];

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <MetaLabel className="mb-2">{label}</MetaLabel>
      {children}
    </div>
  );
}

function ProofStrip({ command, result }: { command: string; result: string }) {
  return (
    <div className="bg-invert-bg text-invert-fg mt-6 rounded-sm px-4 py-4 font-mono text-sm leading-relaxed">
      <div className="text-invert-fg/70">
        <span className="text-invert-fg font-bold">$</span> {command}
      </div>
      <div
        data-reveal
        style={{ transitionDelay: "300ms" }}
        className="mt-1 font-medium"
      >
        <span aria-hidden>✓</span> {result}
      </div>
    </div>
  );
}

function CaseStudyCard({
  study,
  ui,
  defaultOpen,
}: {
  study: CaseStudy;
  ui: CaseStudiesUi;
  defaultOpen: boolean;
}) {
  return (
    <article className="before:bg-emphasis hover:bg-surface/30 relative rounded-sm pl-6 transition-colors duration-300 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:opacity-70 before:transition-all before:duration-300 before:content-[''] hover:before:w-[3px] hover:before:opacity-100 sm:pl-8">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {study.title}
          </h3>
          {study.chip && (
            <span className="text-muted-foreground border-border rounded-sm border px-2 py-1 font-mono text-xs">
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
              className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-2 transition-colors"
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
              className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-2 transition-colors"
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
              className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-2 transition-colors"
            >
              {ui.links.post}
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>

      <div className="text-muted-foreground mt-1 flex flex-wrap items-center gap-x-2 font-mono text-xs">
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

      {!study.proof && study.evidence && (
        <div className="border-border-strong text-muted-foreground mt-6 rounded-sm border px-4 py-4 font-mono text-sm leading-relaxed">
          <span aria-hidden>✓</span> {study.evidence}
        </div>
      )}

      <CaseStudyDisclosure
        contentId={`case-study-${study.slug}`}
        defaultOpen={defaultOpen}
        expandLabel={ui.expand}
        collapseLabel={ui.collapse}
      >
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
              <ol className="space-y-2">
                {study.architecture.map((item, index) => (
                  <li
                    key={item.slice(0, 28)}
                    className="text-muted-foreground flex gap-4 text-sm leading-relaxed"
                  >
                    <span className="text-muted-foreground font-mono text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </Field>

            <Field label={ui.fields.challenges}>
              <ul className="space-y-4">
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
              <TagList items={study.technologies} />
            </Field>
          </div>
        </div>

        <div className="border-border mt-8 grid gap-8 border-t pt-6 lg:grid-cols-2">
          {study.result && study.result.length > 0 && (
            <Field label={ui.fields.result}>
              <BulletList items={study.result} />
            </Field>
          )}
          <Field label={ui.fields.demonstrates}>
            <p className="text-foreground/90 text-sm leading-relaxed text-pretty">
              {study.demonstrates}
            </p>
          </Field>
        </div>
      </CaseStudyDisclosure>
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
        {caseStudies.map((study, index) => (
          <div
            key={study.slug}
            data-reveal
            style={{ transitionDelay: `${Math.min(index, 6) * 60}ms` }}
          >
            <CaseStudyCard
              study={study}
              ui={ui.caseStudies}
              defaultOpen={index === 0}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
