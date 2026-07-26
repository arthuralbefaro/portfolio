import { describe, expect, it } from "vitest";

import { isLocale, locales } from "@/i18n/config";

describe("isLocale", () => {
  it("accepts every supported locale", () => {
    for (const locale of locales) {
      expect(isLocale(locale)).toBe(true);
    }
  });

  it("rejects unsupported values", () => {
    expect(isLocale("es")).toBe(false);
    expect(isLocale("pt-BR")).toBe(false);
    expect(isLocale("EN")).toBe(false);
    expect(isLocale("")).toBe(false);
  });

  it("rejects undefined and null", () => {
    expect(isLocale(undefined)).toBe(false);
    expect(isLocale(null)).toBe(false);
  });
});
