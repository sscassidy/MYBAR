import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TopicOverview } from "@/features/subjects/TopicOverview";
import { getSubject, getTopic } from "@/features/subjects/subjects.config";

describe("TopicOverview", () => {
  it("shows all four sections with content counts for Hearsay", () => {
    render(
      <TopicOverview subject={getSubject("evidence")!} topic={getTopic("evidence", "hearsay")!} />,
    );
    expect(screen.getByRole("link", { name: /Law/ })).toHaveAttribute(
      "href",
      "/subjects/evidence/topics/hearsay/law",
    );
    expect(screen.getByText("11 entries available")).toBeInTheDocument();
    expect(screen.getByText("2 entries available")).toBeInTheDocument();
  });
});
