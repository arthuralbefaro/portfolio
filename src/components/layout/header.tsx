"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";

const sectionIds = navItems.map((item) => item.id);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-border bg-background/80 border-b backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="#inicio"
          className="text-sm font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  activeId === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={profile.resumeUrl} download>
              Currículo
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-border bg-background/95 overflow-hidden border-b backdrop-blur-md lg:hidden",
          open ? "max-h-96" : "max-h-0 border-transparent",
          "transition-all duration-300 ease-in-out",
        )}
      >
        <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm transition-colors",
                  activeId === item.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild className="w-full">
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
              >
                Baixar currículo
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
