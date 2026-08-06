import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Block, GridRow } from "@/components/section";
import { BulletList } from "@/components/ui/bullet-list";
import { MetaLabel } from "@/components/ui/meta-label";
import { TagList } from "@/components/ui/tag-list";
import { getDictionary } from "@/content/dictionary";
import {
  defaultLocale,
  isLocale,
  locales,
  localeOgLocale,
} from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";
import type { CaseStudy } from "@/types";

interface CaseParams {
  locale: string;
  slug: string;
}

function findStudy(locale: Locale, slug: string): CaseStudy | undefined {
  return getDictionary(locale).caseStudies.find((study) => study.slug === slug);
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getDictionary(locale).caseStudies.map((study) => ({
      locale,
      slug: study.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CaseParams>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const study = findStudy(locale, slug);

  if (!study) {
    return {};
  }

  const title = study.title;
  const description = study.tagline;
  const path = `/${locale}/cases/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "pt-BR": `/pt/cases/${slug}`,
        en: `/en/cases/${slug}`,
        "x-default": `/${defaultLocale}/cases/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: localeOgLocale[locale],
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function Field({
  label,
  width = "prose",
  children,
}: {
  label: string;
  width?: "prose" | "full";
  children: ReactNode;
}) {
  return (
    <GridRow rail={<MetaLabel as="h2">{label}</MetaLabel>}>
      <Block width={width}>{children}</Block>
    </GridRow>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted-foreground text-body leading-relaxed text-pretty">
      {children}
    </p>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<CaseParams>;
}) {
  const { locale: raw, slug } = await params;

  if (!isLocale(raw)) {
    notFound();
  }

  const locale: Locale = raw;
  const study = findStudy(locale, slug);

  if (!study) {
    notFound();
  }

  const ui = getDictionary(locale).ui.caseStudies;
  const links = [
    { href: study.links?.github, label: ui.links.code },
    { href: study.links?.demo, label: ui.links.demo },
    { href: study.links?.post, label: ui.links.post },
  ].filter((link): link is { href: string; label: string } =>
    Boolean(link.href),
  );

  return (
    <article className="mx-auto w-full max-w-6xl px-4 pt-32 pb-24 sm:px-8 sm:pt-48">
      <GridRow
        rail={
          <div className="space-y-6">
            <Link
              href={`/${locale}#casos`}
              className="text-muted-foreground hover:text-emphasis text-meta inline-flex items-center gap-2 font-mono transition-colors"
            >
              <ArrowLeft aria-hidden className="size-4" />
              {ui.backToIndex}
            </Link>

            <ul className="text-muted-foreground text-meta space-y-1 font-mono">
              <li>{study.statusLabel ?? study.status}</li>
              {study.period && <li>{study.period}</li>}
              {study.chip && <li>{study.chip}</li>}
            </ul>
          </div>
        }
      >
        <Block>
          <h1 className="font-display text-title font-semibold tracking-tight text-balance">
            {study.title}
          </h1>
        </Block>

        <Block width="prose" className="mt-6">
          <p className="text-muted-foreground text-lead leading-relaxed text-pretty">
            {study.tagline}
          </p>
        </Block>

        {links.length > 0 && (
          <Block className="text-meta mt-6 flex flex-wrap items-center gap-6 font-mono">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-2 py-1 transition-colors"
              >
                {link.label}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            ))}
          </Block>
        )}

        {study.proof && (
          <Block className="border-border-strong bg-surface text-body mt-8 rounded-sm border px-4 py-4 font-mono leading-relaxed">
            <div className="text-muted-foreground">
              <span className="text-foreground">$</span> {study.proof.command}
            </div>
            <div className="text-foreground mt-1">
              <span aria-hidden>✓</span> {study.proof.result}
            </div>
          </Block>
        )}

        {!study.proof && study.evidence && (
          <Block className="border-border-strong bg-surface text-muted-foreground text-body mt-8 rounded-sm border px-4 py-4 font-mono leading-relaxed">
            <span aria-hidden className="text-foreground">
              ✓
            </span>{" "}
            {study.evidence}
          </Block>
        )}
      </GridRow>

      <div className="mt-24 space-y-16">
        <Field label={ui.fields.context}>
          <Prose>{study.context}</Prose>
        </Field>

        <Field label={ui.fields.problem}>
          <Prose>{study.problem}</Prose>
        </Field>

        <Field label={ui.fields.solution}>
          <Prose>{study.solution}</Prose>
        </Field>

        <Field label={ui.fields.architecture} width="full">
          <ol className="space-y-4">
            {study.architecture.map((item, index) => (
              <li key={item.slice(0, 28)} className="flex gap-4">
                <span className="text-muted-foreground text-meta mt-1 shrink-0 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground text-body leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </Field>

        <Field label={ui.fields.challenges}>
          <ul className="space-y-8">
            {study.challenges.map((challenge) => (
              <li key={challenge.title}>
                <h3 className="font-display text-subtitle font-medium tracking-tight">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
                  {challenge.detail}
                </p>
              </li>
            ))}
          </ul>
        </Field>

        <Field label={ui.fields.technologies} width="full">
          <TagList items={study.technologies} />
        </Field>

        {study.result && study.result.length > 0 && (
          <Field label={ui.fields.result}>
            <BulletList items={study.result} />
          </Field>
        )}

        <Field label={ui.fields.demonstrates}>
          <p className="text-foreground/90 text-body leading-relaxed text-pretty">
            {study.demonstrates}
          </p>
        </Field>
      </div>
    </article>
  );
}
