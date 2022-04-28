import BasePage from "../pageObjects/basePage";

class WalletPage extends BasePage {
  static get url() {
    return "/#/wallet";
  }

     static get walletBalance() {
          return cy.get(".confirmation");
    }

    static get amountInput() {
        return cy.get("input[aria-label='Enter an amount']");
    }

    
}

export default WalletPage;