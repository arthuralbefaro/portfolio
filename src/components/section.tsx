import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("border-border scroll-mt-16 border-b py-20 sm:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  mark: string;
  title: string;
  description?: string;
}

export function SectionHeading({ mark, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="text-dim font-mono text-sm whitespace-nowrap">
          {mark}
        </span>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <span aria-hidden className="bg-border h-px flex-1 self-center" />
      </div>
      {description && (
        <p className="text-muted-foreground mt-4 max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}
