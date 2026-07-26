import { defaultLocale, isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function detectLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (isLocale(cookieValue)) {
    return cookieValue;
  }

  const header = acceptLanguage ?? "";
  const primary = header.split(",")[0]?.trim().toLowerCase() ?? "";

  if (primary.startsWith("pt")) {
    return "pt";
  }
  if (primary === "") {
    return defaultLocale;
  }
  return "en";
}
