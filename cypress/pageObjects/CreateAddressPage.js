import BasePage from "../pageObjects/basePage";

class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get  countryInput() {
    return cy.get ("input[data-placeholder='Please provide a country.']");
  }
  static get  nameInput() {
    return cy.get ("input[data-placeholder='Please provide a name.']");
  }
  static get  mobileNumberInput() {
    return cy.get ("input[data-placeholder='Please provide a mobile number.']");
  }
  static get  zipCodeInput() {
    return cy.get ("input[data-placeholder='Please provide a ZIP code.'");
  }
  static get  addressInput() {
    return cy.get ("#address");
  }
  static get  cityInput() {
    return cy.get ("input[data-placeholder='Please provide a city.']");
  }

  static get  stateInput() {
    return cy.get ("input[data-placeholder='Please provide a state.']");
  }

  static get  submitButton() {
    return cy.get ("#submitButton");
  }


}

export default CreateAddressPage;