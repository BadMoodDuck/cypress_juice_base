class BasePage {
  static get header() {
    return cy.get("h1");
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get toastMessage() {
    return cy.get(".mat-simple-snack-bar-content");
  }
  static get rows  () {
    return cy.get ("mat-row");
  }
  static get  submitButton() {
    return cy.get ("#submitButton");
  }

  static visit(options) {
    options = {
      timeout: Cypress.config("defaultCommandTimeout"),
      uniqueText: this.uniqueText,
      expectedUrl: this.url,
      ...options,
    };
    return cy.visit(this.url).then(() => this.assertIsCurrentPage(options));
  }

  static assertIsCurrentPage(
    options = {
      timeout: Cypress.config("defaultCommandTimeout"),
      expectedUrl: this.url,
    }
  ) {
    return this.validatePath(options);
  }

  static validatePath(
    options = {
      timeout: Cypress.config("defaultCommandTimeout"),
      expectedUrl: this.url,
    }
  ) {
    return cy
      .location(options)
      .should((loc) => expect(loc.href).to.include(options.expectedUrl));
  }
}

export default BasePage;
