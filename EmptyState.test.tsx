import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "@/components/ui/EmptyState";

describe("EmptyState", () => {
  it("renders title and description", () => {
    render(<EmptyState title="Nothing here" description="Add something to get started." />);
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
    expect(screen.getByText("Add something to get started.")).toBeInTheDocument();
  });

  it("renders an optional action", () => {
    render(<EmptyState title="Nothing here" action={<button>Create</button>} />);
    expect(screen.getByRole("button", { name: "Create" })).toBeInTheDocument();
  });
});
