describe("about", () => {
  it("Renders about page", () => {
    cy.visit("http://localhost:3000/about");

    cy.contains("#about", "Application to generate and view custom buttons in tailwindCSS.");
  });
});
