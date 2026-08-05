"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";

interface CaseStudyDisclosureProps {
  contentId: string;
  defaultOpen?: boolean;
  expandLabel: string;
  collapseLabel: string;
  children: ReactNode;
}

const toggleClass =
  "text-muted-foreground hover:text-emphasis inline-flex items-center gap-2 font-mono text-sm transition-colors";

export function CaseStudyDisclosure({
  contentId,
  defaultOpen = false,
  expandLabel,
  collapseLabel,
  children,
}: CaseStudyDisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function collapseFromContent() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
        className={`mt-6 ${toggleClass}`}
      >
        {open ? collapseLabel : expandLabel}
        <ChevronDown
          aria-hidden
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={contentId}
        data-disclosure={open ? "open" : "closed"}
        inert={!open}
      >
        <div>
          {children}
          <button
            type="button"
            aria-expanded={open}
            aria-controls={contentId}
            onClick={collapseFromContent}
            className={`mt-8 ${toggleClass}`}
          >
            {collapseLabel}
            <ChevronDown aria-hidden className="size-4 rotate-180" />
          </button>
        </div>
      </div>
    </>
  );
}
