import translations from "../../src/app/translations";

describe("resume page", () => {
  it("allows to change language", () => {
    cy.visit("/");
    cy.contains(translations.en.header.title);
    cy.get('[data-testid="language_select"]').select("lt");
    cy.contains(translations.lt.header.title);
  });
});
