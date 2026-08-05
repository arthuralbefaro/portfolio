import * as React from "react";

import { MetaLabel } from "@/components/ui/meta-label";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  mark?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, mark, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-border scroll-mt-16 border-b py-24 sm:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-8">
        {mark ? (
          <div className="grid grid-cols-4 gap-x-6 sm:grid-cols-12">
            <div className="col-span-4 sm:col-span-3">
              <MetaLabel data-reveal>{mark}</MetaLabel>
            </div>
            <div className="col-span-4 mt-6 grid grid-cols-4 gap-x-6 sm:col-span-9 sm:mt-0 sm:grid-cols-9">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

interface BlockProps {
  width?: "prose" | "full";
  offset?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Block({
  width = "full",
  offset = false,
  className,
  children,
}: BlockProps) {
  return (
    <div
      className={cn(
        "col-span-4",
        offset ? "sm:col-start-2" : "sm:col-start-1",
        width === "prose"
          ? offset
            ? "sm:col-span-6"
            : "sm:col-span-7"
          : offset
            ? "sm:col-span-8"
            : "sm:col-span-9",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  mark?: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  mark,
  title,
  description,
}: SectionHeadingProps) {
  if (!mark) {
    return (
      <Block className="mb-12">
        <div data-reveal>
          <h2 className="font-display text-title font-semibold tracking-tight text-balance">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-lead mt-4 max-w-2xl text-pretty">
              {description}
            </p>
          )}
        </div>
      </Block>
    );
  }

  return (
    <div data-reveal className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="text-muted-foreground font-mono text-sm whitespace-nowrap">
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
