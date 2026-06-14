import { ArrowUpRight, Github, Newspaper } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-muted-foreground mb-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
        {label}
      </p>
      {children}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Card className="overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold">{study.title}</h3>
            <Badge variant="accent">{study.status}</Badge>
          </div>
          {study.period && (
            <p className="text-muted-foreground mt-1 text-sm">{study.period}</p>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm">
          {study.links?.github && (
            <a
              href={study.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-medium transition-colors"
            >
              <Github className="size-4" />
              Código
            </a>
          )}
          {study.links?.demo && (
            <a
              href={study.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-medium transition-colors"
            >
              <ArrowUpRight className="size-4" />
              Demo
            </a>
          )}
          {study.links?.post && (
            <a
              href={study.links.post}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-medium transition-colors"
            >
              <Newspaper className="size-4" />
              Publicação técnica
            </a>
          )}
        </div>
      </div>

      <p className="text-muted-foreground mt-3 max-w-3xl text-pretty">
        {study.tagline}
      </p>

      {/* Body */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Field label="Contexto">
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {study.context}
            </p>
          </Field>
          <Field label="Problema">
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {study.problem}
            </p>
          </Field>
          <Field label="Solução">
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {study.solution}
            </p>
          </Field>
          <Field label="Resultado">
            <ul className="space-y-2">
              {study.result.map((item) => (
                <li
                  key={item.slice(0, 28)}
                  className="text-muted-foreground flex items-start gap-2 text-sm"
                >
                  <span
                    aria-hidden
                    className="bg-foreground/60 mt-1.5 size-1.5 shrink-0 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Field>
        </div>

        <div className="space-y-6">
          <Field label="Arquitetura">
            <ol className="space-y-2">
              {study.architecture.map((item, index) => (
                <li
                  key={item.slice(0, 28)}
                  className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
                >
                  <span className="text-foreground/70 font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </Field>

          <Field label="Desafios técnicos">
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

          <Field label="Tecnologias">
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

      <div className="border-border mt-8 border-t pt-6">
        <Field label="O que demonstra">
          <p className="text-foreground/90 text-sm leading-relaxed text-pretty">
            {study.demonstrates}
          </p>
        </Field>
      </div>
    </Card>
  );
}

export function CaseStudies() {
  return (
    <Section id="casos" className="bg-muted/30">
      <SectionHeading
        eyebrow="Casos técnicos"
        title="Casos técnicos"
        description="Estudos de caso dos projetos e do trabalho que melhor representam minha atuação em backend — do contexto ao resultado"
      />

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.05}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
