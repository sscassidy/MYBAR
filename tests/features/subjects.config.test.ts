import { describe, expect, it } from "vitest";
import { getSection, getSubject, SECTIONS, SUBJECTS } from "@/features/subjects/subjects.config";

describe("subjects config", () => {
  it("defines exactly the three bar exam subjects", () => {
    expect(SUBJECTS.map((s) => s.slug)).toEqual(["evidence", "criminal-procedure", "legal-ethics"]);
  });

  it("defines the four content sections for every subject", () => {
    expect(SECTIONS.map((s) => s.slug)).toEqual(["legislation", "cases", "study-notes", "templates"]);
  });

  it("looks up a subject by slug", () => {
    expect(getSubject("evidence")?.name).toBe("Evidence");
    expect(getSubject("not-real")).toBeUndefined();
  });

  it("looks up a section by slug", () => {
    expect(getSection("cases")?.name).toBe("Cases");
    expect(getSection("not-real")).toBeUndefined();
  });
});
