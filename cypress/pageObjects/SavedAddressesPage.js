import BasePage from "../pageObjects/basePage";

class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addNewAddressButton () {
    return cy.get ("button[aria-label='Add a new address']");
  }
  static get rows  () {
    return cy.get ("mat-row");
  }


}

export default SavedAddressesPage;
