import { describe, expect, it } from "vitest";
import {
  getSection,
  getSubject,
  getTopic,
  getTopics,
  SECTIONS,
  SUBJECTS,
} from "@/features/subjects/subjects.config";

describe("subjects config", () => {
  it("defines exactly the three bar exam subjects", () => {
    expect(SUBJECTS.map((s) => s.slug)).toEqual(["evidence", "criminal-procedure", "legal-ethics"]);
  });

  it("defines the four content sections for every topic", () => {
    expect(SECTIONS.map((s) => s.slug)).toEqual(["law", "cases", "study-notes", "templates"]);
  });

  it("looks up a subject by slug", () => {
    expect(getSubject("evidence")?.name).toBe("Evidence");
    expect(getSubject("not-real")).toBeUndefined();
  });

  it("looks up a section by slug", () => {
    expect(getSection("cases")?.name).toBe("Cases");
    expect(getSection("not-real")).toBeUndefined();
  });

  it("lists Hearsay as a topic under Evidence", () => {
    expect(getTopics("evidence").map((t) => t.slug)).toEqual(["hearsay"]);
    expect(getTopic("evidence", "hearsay")?.name).toBe("Hearsay");
  });

  it("returns an empty topic list for subjects with no topics yet", () => {
    expect(getTopics("criminal-procedure")).toEqual([]);
    expect(getTopics("legal-ethics")).toEqual([]);
  });
});
