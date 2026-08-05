import { describe, expect, it } from "vitest";

import { getDictionary } from "@/content/dictionary";

const pt = getDictionary("pt");
const en = getDictionary("en");

describe("locale content parity", () => {
  it("has the same case studies, identified by slug", () => {
    expect(en.caseStudies.map((study) => study.slug)).toEqual(
      pt.caseStudies.map((study) => study.slug),
    );
  });

  it("lists professional case studies before personal ones", () => {
    for (const dictionary of [pt, en]) {
      const isPersonal = dictionary.caseStudies.map(
        (study) => study.status === "Projeto pessoal",
      );

      expect(isPersonal).toContain(true);
      expect(isPersonal).toContain(false);
      expect(isPersonal.lastIndexOf(false)).toBeLessThan(
        isPersonal.indexOf(true),
      );
    }
  });

  it("has the same certifications, identified by title", () => {
    expect(en.certifications.map((cert) => cert.title)).toEqual(
      pt.certifications.map((cert) => cert.title),
    );
  });

  it("has the same education entries, identified by institution", () => {
    expect(en.education.map((item) => item.institution)).toEqual(
      pt.education.map((item) => item.institution),
    );
  });

  it("has the same experiences, identified by company", () => {
    expect(en.experiences.map((item) => item.company)).toEqual(
      pt.experiences.map((item) => item.company),
    );
  });

  it("has the same skill groups, identified by category", () => {
    expect(en.skillGroups.map((group) => group.category)).toEqual(
      pt.skillGroups.map((group) => group.category),
    );
  });

  it("has the same nav items, identified by anchor id", () => {
    expect(en.navItems.map((item) => item.id)).toEqual(
      pt.navItems.map((item) => item.id),
    );
  });

  it("has the same number of technical posts", () => {
    expect(en.technicalPosts).toHaveLength(pt.technicalPosts.length);
  });

  it("has the same number of spoken languages", () => {
    expect(en.languages).toHaveLength(pt.languages.length);
  });

  it("keeps profile identity fields in sync", () => {
    expect(en.profile.name).toBe(pt.profile.name);
    expect(en.profile.email).toBe(pt.profile.email);
    expect(en.profile.phone).toBe(pt.profile.phone);
    expect(en.profile.company).toEqual(pt.profile.company);
  });

  it("gives each locale its own resume file", () => {
    expect(pt.profile.resumeUrl).toMatch(/^\/CV_.+\.pdf$/);
    expect(en.profile.resumeUrl).toMatch(/^\/CV_.+\.pdf$/);
    expect(en.profile.resumeUrl).not.toBe(pt.profile.resumeUrl);
  });
});
