describe("Home page", () => {
  it("renders header, custom-button-list, custom-button-item, footer", () => {
    cy.visit("http://localhost:3000");

    cy.get("#header").should("exist");
    cy.get("#custom-button-list").should("exist");
    cy.get("#custom-button-item-link").should("exist");
    cy.get("#footer").should("exist");
  });

  it("renders custom-button-item and navigate to /custom-button/:id", () => {
    cy.visit("http://localhost:3000");

    cy.get("#custom-button-item-link").click();

    cy.url().should("include", "/custom-buttons/1");
  });
});
