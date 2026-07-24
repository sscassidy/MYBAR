import { describe, expect, it } from "vitest";
import { getTopicSectionContent } from "@/content";

describe("content index", () => {
  it("returns all 11 hearsay law provisions", () => {
    const docs = getTopicSectionContent("evidence", "hearsay", "law");
    expect(docs).toHaveLength(11);
    expect(docs?.map((d) => d.meta)).toContain("s65");
  });

  it("returns cases, study notes, and templates for hearsay", () => {
    expect(getTopicSectionContent("evidence", "hearsay", "cases")).toHaveLength(1);
    expect(getTopicSectionContent("evidence", "hearsay", "study-notes")).toHaveLength(1);
    expect(getTopicSectionContent("evidence", "hearsay", "templates")).toHaveLength(2);
  });

  it("returns undefined for a topic/section with no content", () => {
    expect(getTopicSectionContent("evidence", "admissions", "law")).toBeUndefined();
    expect(getTopicSectionContent("criminal-procedure", "anything", "law")).toBeUndefined();
  });
});
