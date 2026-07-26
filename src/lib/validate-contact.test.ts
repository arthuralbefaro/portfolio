import { describe, expect, it } from "vitest";

import { validateContact } from "@/lib/validate-contact";

const valid = {
  name: "Arthur",
  email: "arthur@example.com",
  message: "A message with enough length.",
};

describe("validateContact", () => {
  it("returns no fields for valid input", () => {
    expect(validateContact(valid)).toEqual([]);
  });

  it("flags a name with a single character", () => {
    expect(validateContact({ ...valid, name: "A" })).toEqual(["name"]);
  });

  it("accepts a name with two characters", () => {
    expect(validateContact({ ...valid, name: "Al" })).toEqual([]);
  });

  it("ignores surrounding whitespace in the name", () => {
    expect(validateContact({ ...valid, name: "  A  " })).toEqual(["name"]);
  });

  it("flags invalid emails", () => {
    expect(validateContact({ ...valid, email: "not-an-email" })).toEqual([
      "email",
    ]);
    expect(validateContact({ ...valid, email: "a@b" })).toEqual(["email"]);
    expect(validateContact({ ...valid, email: "a b@c.com" })).toEqual([
      "email",
    ]);
  });

  it("flags a message with 9 characters and accepts 10", () => {
    expect(validateContact({ ...valid, message: "123456789" })).toEqual([
      "message",
    ]);
    expect(validateContact({ ...valid, message: "1234567890" })).toEqual([]);
  });

  it("flags every empty field at once", () => {
    expect(validateContact({ name: "", email: "", message: "" })).toEqual([
      "name",
      "email",
      "message",
    ]);
  });
});
