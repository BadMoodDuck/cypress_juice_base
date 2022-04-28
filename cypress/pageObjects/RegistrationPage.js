import BasePage from "../pageObjects/basePage";

class RegistrationPage extends BasePage {
  static get url() {
    return "/#/register";
  }

    static get emailInput() {
        return cy.get("#emailControl");
    }
    static get passwordInput() {
        return cy.get("#passwordControl");
    }
    static get passwordRepeatInput() {
        return cy.get("#repeatPasswordControl");
    }
    static get securityQuestionField() {
        return cy.get("div .mat-select-placeholder");
    }
    static get securityQuestionFieldItems() {
        return cy.get("span.mat-option-text");
    }
    static get securityAnswerField() {
        return cy.get("#securityAnswerControl");
    }
    static get registerButton() {
        return cy.get("#registerButton");
    }
    static get registerButton() {
        return cy.get("#registerButton");
    }
    


}


export default RegistrationPage;