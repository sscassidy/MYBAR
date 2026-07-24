import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionContent } from "@/features/subjects/SectionContent";
import { getSection, getSubject, getTopic } from "@/features/subjects/subjects.config";

describe("SectionContent", () => {
  it("shows an empty-state placeholder when a topic/section has no content", () => {
    const subject = getSubject("criminal-procedure")!;
    const section = getSection("cases")!;
    // Criminal Procedure has no topics yet, so any topic/section combo is empty.
    render(
      <SectionContent
        subject={subject}
        topic={{ slug: "placeholder", name: "Placeholder", description: "" }}
        section={section}
      />,
    );
    expect(screen.getByText("No cases added yet")).toBeInTheDocument();
    expect(screen.getByText(/Cases for Placeholder will show up here/)).toBeInTheDocument();
  });

  it("renders real content when it exists", () => {
    const subject = getSubject("evidence")!;
    const topic = getTopic("evidence", "hearsay")!;
    const section = getSection("law")!;
    render(<SectionContent subject={subject} topic={topic} section={section} />);
    expect(screen.getByText("s59")).toBeInTheDocument();
    expect(
      screen.getByText("The hearsay rule — exclusion of hearsay evidence"),
    ).toBeInTheDocument();
  });
});
