import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SubjectOverview } from "@/features/subjects/SubjectOverview";
import { getSubject } from "@/features/subjects/subjects.config";

describe("SubjectOverview", () => {
  it("shows the Hearsay topic and a legislation link for Evidence", () => {
    render(<SubjectOverview subject={getSubject("evidence")!} />);
    expect(screen.getByRole("link", { name: /Hearsay/ })).toHaveAttribute(
      "href",
      "/subjects/evidence/topics/hearsay",
    );
    expect(screen.getByRole("link", { name: /Full Act reference/ })).toHaveAttribute(
      "href",
      "/subjects/evidence/legislation",
    );
  });

  it("shows an empty topics state for a subject with none yet", () => {
    render(<SubjectOverview subject={getSubject("criminal-procedure")!} />);
    expect(screen.getByText("No topics added yet")).toBeInTheDocument();
  });
});
