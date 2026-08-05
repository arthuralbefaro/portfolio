import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Section, SectionHeading } from "@/components/section";
import { MetaLabel } from "@/components/ui/meta-label";
import { TagList } from "@/components/ui/tag-list";
import type { Dictionary } from "@/content/dictionary";
import type { Locale } from "@/i18n/config";
import type { UiDictionary } from "@/content/ui/types";
import type { CaseStudy } from "@/types";

type CaseStudiesUi = UiDictionary["caseStudies"];

const PERSONAL_STATUS = "Projeto pessoal";

function CaseMeta({ study }: { study: CaseStudy }) {
  return (
    <span className="text-muted-foreground text-meta flex flex-wrap items-center gap-x-2 font-mono">
      <span>{study.statusLabel ?? study.status}</span>
      {study.period && (
        <>
          <span aria-hidden>·</span>
          <span>{study.period}</span>
        </>
      )}
    </span>
  );
}

function ProfessionalEntry({
  study,
  locale,
  ui,
}: {
  study: CaseStudy;
  locale: Locale;
  ui: CaseStudiesUi;
}) {
  return (
    <article className="border-border border-t pt-6">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h4 className="font-display text-subtitle font-semibold tracking-tight">
          {study.title}
        </h4>
        <CaseMeta study={study} />
      </div>

      <p className="text-muted-foreground text-body mt-2 max-w-3xl leading-relaxed text-pretty">
        {study.result?.[0] ?? study.tagline}
      </p>

      <TagList items={study.technologies} className="mt-4" />

      <Link
        href={`/${locale}/cases/${study.slug}`}
        className="text-foreground hover:text-emphasis text-meta mt-4 inline-flex items-center gap-2 font-mono transition-colors"
      >
        {ui.viewCase}
        <ArrowUpRight aria-hidden className="size-4" />
      </Link>
    </article>
  );
}

function PersonalEntry({
  study,
  locale,
  ui,
}: {
  study: CaseStudy;
  locale: Locale;
  ui: CaseStudiesUi;
}) {
  return (
    <article className="border-border border-t pt-4">
      <Link
        href={`/${locale}/cases/${study.slug}`}
        className="group flex flex-wrap items-baseline gap-x-4 gap-y-1"
      >
        <h4 className="font-display text-body font-medium">{study.title}</h4>
        <CaseMeta study={study} />
        <span className="text-muted-foreground group-hover:text-emphasis text-meta ml-auto inline-flex items-center gap-2 font-mono transition-colors">
          {ui.viewCase}
          <ArrowUpRight aria-hidden className="size-4" />
        </span>
      </Link>
    </article>
  );
}

interface CaseStudiesProps {
  dict: Dictionary;
  locale: Locale;
}

export function CaseStudies({ dict, locale }: CaseStudiesProps) {
  const { caseStudies, ui } = dict;
  const professional = caseStudies.filter(
    (study) => study.status !== PERSONAL_STATUS,
  );
  const personal = caseStudies.filter(
    (study) => study.status === PERSONAL_STATUS,
  );

  return (
    <Section id="casos">
      <SectionHeading
        mark={ui.caseStudies.mark}
        title={ui.caseStudies.title}
        description={ui.caseStudies.description}
      />

      <div data-reveal>
        <MetaLabel as="h3">{ui.caseStudies.groups.professional}</MetaLabel>
        <div className="mt-6 space-y-8">
          {professional.map((study) => (
            <ProfessionalEntry
              key={study.slug}
              study={study}
              locale={locale}
              ui={ui.caseStudies}
            />
          ))}
        </div>
      </div>

      <div data-reveal style={{ transitionDelay: "80ms" }} className="mt-16">
        <MetaLabel as="h3">{ui.caseStudies.groups.personal}</MetaLabel>
        <div className="mt-6 space-y-4">
          {personal.map((study) => (
            <PersonalEntry
              key={study.slug}
              study={study}
              locale={locale}
              ui={ui.caseStudies}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
