import { queryAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ContentBox from ".";

describe("ContentBox UI", () => {
  it("should show title when passed one", () => {
    render(<ContentBox title="This title">Child Text</ContentBox>);

    const title = document.querySelector("h3");

    expect(title).toBeTruthy();
    expect(title.textContent).toBe("This title");
    expect(screen.getByText("This title")).toBeInTheDocument();
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("should NOT show title when it is NOT passed", () => {
    render(<ContentBox>Child Text</ContentBox>);

    const items = screen.queryAllByText("This title");
    const title = document.querySelector("h3");

    expect(title).toBe(null);
    expect(items).toHaveLength(0);
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });
});
