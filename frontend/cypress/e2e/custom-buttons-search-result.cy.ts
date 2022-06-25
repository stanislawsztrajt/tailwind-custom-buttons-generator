describe("custom-buttons-search-result", () => {
  it("search custom-button using input from header and redirect to page with content", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");
    cy.get("#header-input-search").type("button");
    cy.wait(3000);
    cy.get("#custom-button-list").should("exist");
  });

  it("search custom-button using input from header and redirect to page without content", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:3000");
    cy.get("#header-input-search").type(
      "without content message EISNTOSHR890ht382h8#*()*TH@THRSKOVSnvsreoikcvrsntasewnt"
    );
    cy.wait(3000);
    cy.get("#not-found-custom-buttons").should("exist");
  });
});
