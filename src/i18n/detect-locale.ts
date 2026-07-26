import { defaultLocale, isLocale } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

interface LanguageCandidate {
  language: string;
  quality: number;
}

function parseAcceptLanguage(header: string): LanguageCandidate[] {
  return header
    .split(",")
    .map((entry) => {
      const [tag = "", ...params] = entry.trim().split(";");
      const language = tag.trim().toLowerCase();
      const qParam = params
        .map((param) => param.trim())
        .find((param) => param.startsWith("q="));
      const parsed = qParam ? Number.parseFloat(qParam.slice(2)) : 1;
      const quality = Number.isFinite(parsed) ? parsed : 0;
      return { language, quality };
    })
    .filter((candidate) => candidate.language !== "" && candidate.quality > 0)
    .sort((a, b) => b.quality - a.quality);
}

export function detectLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (isLocale(cookieValue)) {
    return cookieValue;
  }

  const header = (acceptLanguage ?? "").trim();
  if (header === "") {
    return defaultLocale;
  }

  for (const { language } of parseAcceptLanguage(header)) {
    const primary = language.split("-")[0];
    if (isLocale(primary)) {
      return primary;
    }
  }
  return "en";
}
