const customButtonValue = "It's button";
const customButtonCustomClass = "focus:bg-red-500";

describe("custom-button-generator", () => {
  it("changes custom-button-generator inputs value and post custom-button", () => {
    cy.visit("http://localhost:3000/custom-button-generator");
    cy.clock();

    cy.get("#custom-button-value").type(customButtonValue);
    cy.get("#custom-button-custom-class").type(customButtonCustomClass);

    cy.get("#tailwind-options-select").select("w-96");
    cy.get("#tailwind-options-select").should("have.value", `{ "prefix": "w-", "value": "96" }`);
    // 13 lipca 10:15
    cy.get("#post-custom-button-button").click();

    cy.get("#swal-input-name").type("Test button");
    cy.get("#swal-input-description").type("Test button description");

    cy.get(".swal2-confirm").click();

    cy.wait(500);
    cy.get(".swal2-confirm").click();
    cy.url().should("include", "custom-buttons");
  });

  it("check post-custom-button-generator validation", () => {
    cy.visit("http://localhost:3000/custom-button-generator");
    cy.get("#post-custom-button-button").click();

    cy.get(".swal2-confirm").click();
    cy.wait(500);
    cy.get("#swal2-validation-message").contains("Please enter name");

    cy.get("#swal-input-name").type("a");
    cy.get(".swal2-confirm").click();
    cy.get("#swal-input-name").type("Test button");
    cy.wait(500);
    cy.get("#swal2-validation-message").contains("Name must be longner than 5 chars");

    cy.get(".swal2-confirm").click();
    cy.wait(500);
    cy.get("#swal2-validation-message").contains("Please enter description");

    cy.get("#swal-input-description").type("a");
    cy.get(".swal2-confirm").click();
    cy.wait(500);
    cy.get("#swal2-validation-message").contains("Description must be longner than 10 chars");
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
