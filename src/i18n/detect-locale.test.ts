import { describe, expect, it } from "vitest";

import { defaultLocale } from "@/i18n/config";
import { detectLocale } from "@/i18n/detect-locale";

describe("detectLocale", () => {
  it("prefers a valid cookie over the Accept-Language header", () => {
    expect(detectLocale("en", "pt-BR,pt;q=0.9")).toBe("en");
    expect(detectLocale("pt", "en-US,en;q=0.9")).toBe("pt");
  });

  it("ignores an invalid cookie and falls back to the header", () => {
    expect(detectLocale("es", "pt-BR,pt;q=0.9")).toBe("pt");
    expect(detectLocale("", "en-US,en;q=0.9")).toBe("en");
  });

  it("returns pt when the header starts with pt", () => {
    expect(detectLocale(undefined, "pt-BR,pt;q=0.9")).toBe("pt");
    expect(detectLocale(undefined, "pt")).toBe("pt");
  });

  it("returns the default locale when the header is missing or empty", () => {
    expect(detectLocale(undefined, null)).toBe(defaultLocale);
    expect(detectLocale(undefined, "")).toBe(defaultLocale);
    expect(detectLocale(undefined, "   ")).toBe(defaultLocale);
  });

  it("returns en for other languages", () => {
    expect(detectLocale(undefined, "en-US,en;q=0.9")).toBe("en");
    expect(detectLocale(undefined, "fr-FR,fr;q=0.9")).toBe("en");
    expect(detectLocale(undefined, "de")).toBe("en");
    expect(detectLocale(undefined, "*")).toBe("en");
  });

  it("falls through unsupported entries to a supported one", () => {
    expect(detectLocale(undefined, "es-ES,pt-BR;q=0.9")).toBe("pt");
    expect(detectLocale(undefined, "fr-FR,fr;q=0.9,en;q=0.8")).toBe("en");
  });

  it("orders entries by q weight, not by position", () => {
    expect(detectLocale(undefined, "pt;q=0.3,en;q=0.9")).toBe("en");
    expect(detectLocale(undefined, "es-ES;q=0.9,pt;q=0.5,en;q=0.8")).toBe("en");
  });

  it("treats q=0 as not acceptable", () => {
    expect(detectLocale(undefined, "pt;q=0,en;q=0.5")).toBe("en");
  });

  it("matches on the primary language subtag", () => {
    expect(detectLocale(undefined, "pt-PT")).toBe("pt");
    expect(detectLocale(undefined, "en-GB")).toBe("en");
  });
});
