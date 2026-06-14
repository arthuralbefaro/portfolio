import * as React from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

/** Page section wrapper with a consistent anchor offset and spacing. */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/** Standardised section heading (eyebrow label + title + description). */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" && "items-center text-center",
      )}
    >
      <span className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl text-pretty">
          {description}
        </p>
      )}
    </Reveal>
  );
}
