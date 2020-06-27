describe("Reading Test", () => {
  before(() => {
    cy.visit("http://localhost:1234/#teste");
  });

  it("should start test", () => {
    cy.get("#iniciarTeste").as("btnIniciarTeste").click();

    cy.get("@btnIniciarTeste")
      .should("contain", "Finalizar")
      .and("be.disabled");
  });

  it("should enable button when screen is scrolled to the end", () => {
    cy.get(".screen").scrollTo("bottom");
    cy.get("#iniciarTeste").should("not.be.disabled");
  });

  it("Should finish test", () => {
    cy.wait(10000);
    cy.get("#iniciarTeste").should("not.be.disabled").click();
    cy.get(".modal").should("be.visible");
  });

  it("should close modal", () => {
    cy.get(".modal .btn-close").click().should("not.be.visible");
  });
});

context("Unit tests", () => {});
