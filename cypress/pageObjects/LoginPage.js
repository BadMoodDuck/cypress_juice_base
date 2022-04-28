import BasePage from "../pageObjects/basePage";

class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get email() {
    return cy.get("input#email");
  };

  static get password() {
    return cy.get("input#password");
  };

  static get loginButton(){
    return cy.get("button#loginButton");
  };
}

export default LoginPage;
