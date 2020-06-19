context("Header", () => {
  before(() => {
    cy.visit("http://localhost:1234");
  });

  describe("Test the UI of the header", () => {
    it("Should have a button leading to the test", () => {
      cy.get("header a.btn-header")
        .as("btnHeader")
        .should("contain", "Calcular");

      cy.get("@btnHeader")
        .click()
        .url()
        .should("eq", "http://localhost:1234/#teste");
    });

    it("should have a logo", () => {
      cy.get("img");
    });
  });

  describe("Test the UI of the footer", () => {
    it("Should have a button to external page", () => {
      cy.get("#footer a.btn-chamada").should(
        "have.attr",
        "href",
        "https://www.leituraorganica.com.br/"
      );
    });
  });
});
