export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeCookie = "NEXT_LOCALE";

export const localeHtmlLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export const localeOgLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "pt" || value === "en";
}
