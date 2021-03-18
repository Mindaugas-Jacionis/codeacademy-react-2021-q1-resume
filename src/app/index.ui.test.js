import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from ".";
import translations from "./translations";

describe("App", () => {
  it("should have personal skills content box", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("personal_skills")).toBeVisible();
  });

  it("should change translated strings when language is selected", () => {
    const { getByTestId } = render(<App />);
    const languageSelect = getByTestId("language_select");
    const headerJobTitle = getByTestId("header_job_title");

    expect(languageSelect).toBeVisible();
    expect(languageSelect.value).toBe("en");
    expect(headerJobTitle.textContent).toBe(translations.en.header.title);

    fireEvent.change(languageSelect, { target: { value: "lt" } });

    expect(languageSelect.value).toBe("lt");
    expect(headerJobTitle.textContent).toBe(translations.lt.header.title);
  });
});
