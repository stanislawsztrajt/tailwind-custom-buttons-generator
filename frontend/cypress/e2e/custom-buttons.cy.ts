describe("custom-buttons", () => {
  it("renders custom-button", () => {
    cy.visit("http://localhost:3000/custom-buttons/1");

    cy.get("#button").should("exist");
  });

  it("copy custom-button to class, HTML, JSX", () => {
    cy.visit("http://localhost:3000/custom-button-generator");
    cy.get("#copy-custom-button-as-class").click();
    cy.wait(500);
    cy.get("#swal2-title").contains("The copied content is in the clipboard");
    cy.get(".swal2-confirm").click();

    cy.get("#copy-custom-button-as-html").click();
    cy.wait(500);
    cy.get("#swal2-title").contains("The copied content is in the clipboard");
    cy.get(".swal2-confirm").click();

    cy.get("#copy-custom-button-as-jsx").click();
    cy.wait(500);
    cy.get("#swal2-title").contains("The copied content is in the clipboard");
    cy.get(".swal2-confirm").click();
  });
});
