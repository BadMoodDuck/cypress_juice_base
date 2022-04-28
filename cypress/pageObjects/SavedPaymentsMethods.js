import BasePage from "../pageObjects/basePage";

class SavedPaymentMethods extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCardButton  () {
    return cy.get (".mat-expansion-panel-header");
  }
  static cardInfoInput (fieldName) {
    return cy
    .get("mat-label")
    .contains(fieldName)
    .parents(".mat-form-field-infix")
    .find("input")
  }
  static cardInfoMenuInput (fieldName) {
    return cy
    .get("mat-label")
    .contains(fieldName)
    .parents(".mat-form-field-infix")
    .find("select")
  }


}

export default SavedPaymentMethods;