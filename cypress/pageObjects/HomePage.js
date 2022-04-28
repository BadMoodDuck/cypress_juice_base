import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }


  static get accountButton () {
    return cy.get ('#navbarAccount')
  }

  static get loginButton () {
    return cy.get ('#navbarLoginButton')
  }

  static get gotToUserProfileButton () {
    return cy.get ("button[aria-label='Go to user profile']")
  }

  static get searchButton () {
    return cy.get ('#searchQuery');
  }

  static get searchInputField () {
    return cy.get ('#mat-input-0')
  }
  static get productCardName () {
    return cy.get ('.item-name');
  }

  static get productCardDialogBox () {
    return cy.get ('app-product-details');
  }
  static get productCardDialogBoxCloseButton () {
    return cy.get ("button[aria-label='Close Dialog']");
  }

  static get reviewsButton () {
    return cy.get ("mat-expansion-panel[aria-label='Expand for Reviews']");
  }

  static get comments () {
    return cy.get (".comment");
  }

  static get reviewInputField () {
    return cy.get (".textarea[aria-label='Text field to review a product']");
  }

  static get submitButton () {
    return cy.get ("#submitButton");
  }

}
export default HomePage;
