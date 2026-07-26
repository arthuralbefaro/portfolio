"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Button } from "@/components/ui/button";
import type { UiDictionary } from "@/content/ui/types";
import type { Locale } from "@/i18n/config";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

interface HeaderProps {
  locale: Locale;
  navItems: NavItem[];
  ui: UiDictionary["header"];
  resumeUrl: string;
}

export function Header({ locale, navItems, ui, resumeUrl }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-border bg-background/82 border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#inicio"
          className="font-mono text-sm tracking-tight"
          onClick={() => setOpen(false)}
        >
          arthur<span className="text-dim">.</span>albefaro
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={cn(
                  "relative py-1 font-mono text-sm transition-colors",
                  activeId === item.id
                    ? "text-foreground after:bg-emphasis after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:content-['']"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label.toLowerCase()}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} label={ui.languageLabel} />
          <Button
            asChild
            size="sm"
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <a href={resumeUrl} download>
              {ui.resume}
            </a>
          </Button>
          <Button
            ref={toggleRef}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "border-border bg-background/95 overflow-hidden border-b backdrop-blur-md lg:hidden",
          open ? "max-h-96" : "max-h-0 border-transparent",
          "transition-all duration-300 ease-in-out",
        )}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 font-mono sm:px-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block py-2.5 text-sm transition-colors",
                  activeId === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label.toLowerCase()}
              </Link>
            </li>
          ))}
          <li className="border-border mt-2 border-t pt-2">
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground block py-2.5 text-sm transition-colors"
            >
              {ui.resume.toLowerCase()}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
