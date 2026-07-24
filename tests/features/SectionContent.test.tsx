import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SectionContent } from "@/features/subjects/SectionContent";
import { getSection, getSubject } from "@/features/subjects/subjects.config";

describe("SectionContent", () => {
  it("shows an empty-state placeholder naming the subject and section", () => {
    const subject = getSubject("evidence")!;
    const section = getSection("cases")!;
    render(<SectionContent subject={subject} section={section} />);
    expect(screen.getByText("No cases added yet")).toBeInTheDocument();
    expect(screen.getByText(/Cases for Evidence will show up here/)).toBeInTheDocument();
  });
});
