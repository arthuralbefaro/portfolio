"use client";

import { usePathname, useRouter } from "next/navigation";

import { localeCookie, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: Locale) {
    if (next === locale) {
      return;
    }
    document.cookie = `${localeCookie}=${next}; path=/; max-age=31536000; samesite=lax`;
    const current = locales.find(
      (candidate) =>
        pathname === `/${candidate}` || pathname.startsWith(`/${candidate}/`),
    );
    const rest = current ? pathname.slice(current.length + 1) : pathname;
    router.push(`/${next}${rest}`);
    router.refresh();
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="text-meta flex items-center font-mono"
    >
      {locales.map((option, index) => (
        <span key={option} className="flex items-center">
          {index > 0 && (
            <span aria-hidden className="text-muted-foreground px-1">
              /
            </span>
          )}
          <button
            type="button"
            onClick={() => switchTo(option)}
            aria-current={option === locale ? "true" : undefined}
            className={cn(
              "rounded-sm px-1 py-1 uppercase transition-colors",
              option === locale
                ? "text-emphasis"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option}
          </button>
        </span>
      ))}
    </div>
  );
}
