import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      <Link
        href={`/${locale}#casos`}
        className="text-muted-foreground hover:text-emphasis text-meta inline-flex items-center gap-2 font-mono transition-colors"
      >
        <ArrowLeft aria-hidden className="size-4" />
        {ui.backToIndex}
      </Link>

      <header className="mt-12">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="font-display text-title font-semibold tracking-tight text-balance">
            {study.title}
          </h1>
          {study.chip && (
            <span className="text-muted-foreground border-border text-meta rounded-sm border px-2 py-1 font-mono">
              {study.chip}
            </span>
          )}
        </div>

        <div className="text-muted-foreground text-meta mt-2 flex flex-wrap items-center gap-x-2 font-mono">
          <span>{study.statusLabel ?? study.status}</span>
          {study.period && (
            <>
              <span aria-hidden>·</span>
              <span>{study.period}</span>
            </>
          )}
        </div>

        <p className="text-muted-foreground text-lead mt-6 max-w-3xl text-pretty">
          {study.tagline}
        </p>

        {links.length > 0 && (
          <div className="text-meta mt-6 flex flex-wrap items-center gap-6 font-mono">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-emphasis inline-flex items-center gap-2 transition-colors"
              >
                {link.label}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            ))}
          </div>
        )}
      </header>

      {study.proof && (
        <div className="bg-invert-bg text-invert-fg text-body mt-12 rounded-sm px-4 py-4 font-mono leading-relaxed">
          <div className="text-invert-fg/70">
            <span className="text-invert-fg font-bold">$</span>{" "}
            {study.proof.command}
          </div>
          <div className="mt-1 font-medium">
            <span aria-hidden>✓</span> {study.proof.result}
          </div>
        </div>
      )}

      {!study.proof && study.evidence && (
        <div className="border-border-strong text-muted-foreground text-body mt-12 rounded-sm border px-4 py-4 font-mono leading-relaxed">
          <span aria-hidden>✓</span> {study.evidence}
        </div>
      )}

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <section>
            <MetaLabel as="h2">{ui.fields.context}</MetaLabel>
            <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
              {study.context}
            </p>
          </section>
          <section>
            <MetaLabel as="h2">{ui.fields.problem}</MetaLabel>
            <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
              {study.problem}
            </p>
          </section>
          <section>
            <MetaLabel as="h2">{ui.fields.solution}</MetaLabel>
            <p className="text-muted-foreground text-body mt-2 leading-relaxed text-pretty">
              {study.solution}
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <MetaLabel as="h2">{ui.fields.architecture}</MetaLabel>
            <ol className="mt-2 space-y-2">
              {study.architecture.map((item, index) => (
                <li
                  key={item.slice(0, 28)}
                  className="text-muted-foreground text-body flex gap-4 leading-relaxed"
                >
                  <span className="text-muted-foreground text-meta font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section>
            <MetaLabel as="h2">{ui.fields.challenges}</MetaLabel>
            <ul className="mt-2 space-y-4">
              {study.challenges.map((challenge) => (
                <li key={challenge.title} className="text-body">
                  <span className="text-foreground font-medium">
                    {challenge.title}.
                  </span>{" "}
                  <span className="text-muted-foreground leading-relaxed">
                    {challenge.detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <MetaLabel as="h2">{ui.fields.technologies}</MetaLabel>
            <TagList items={study.technologies} className="mt-2" />
          </section>
        </div>
      </div>

      <div className="border-border mt-16 grid gap-12 border-t pt-12 lg:grid-cols-2">
        {study.result && study.result.length > 0 && (
          <section>
            <MetaLabel as="h2">{ui.fields.result}</MetaLabel>
            <BulletList items={study.result} className="mt-2" />
          </section>
        )}
        <section>
          <MetaLabel as="h2">{ui.fields.demonstrates}</MetaLabel>
          <p className="text-foreground/90 text-body mt-2 leading-relaxed text-pretty">
            {study.demonstrates}
          </p>
        </section>
      </div>
    </article>
  );
}
