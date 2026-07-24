import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { SubjectsHome } from "@/features/subjects/SubjectsHome";

describe("SubjectsHome", () => {
  it("links to all three subjects", () => {
    render(<SubjectsHome />);
    expect(screen.getByRole("link", { name: /Evidence/ })).toHaveAttribute(
      "href",
      "/subjects/evidence",
    );
    expect(screen.getByRole("link", { name: /Criminal Procedure/ })).toHaveAttribute(
      "href",
      "/subjects/criminal-procedure",
    );
    expect(screen.getByRole("link", { name: /Legal Ethics/ })).toHaveAttribute(
      "href",
      "/subjects/legal-ethics",
    );
  });
});
