import CreateAddressPage from "../../pageObjects/CreateAddressPage";
import HomePage from "../../pageObjects/HomePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegistrationPage from "../../pageObjects/RegistrationPage";
import SavedAddressesPage from "../../pageObjects/SavedAddressesPage";
import SavedPaymentMethods from "../../pageObjects/SavedPaymentsMethods";
import WalletPage from "../../pageObjects/WalletPage";
import WalletPaymentPage from "../../pageObjects/WalletPaymentPage";

describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
   // TODO: Implement me
   HomePage.accountButton.click();
   HomePage.loginButton.click();
   LoginPage.assertIsCurrentPage();
   LoginPage.notYetCustomer.click();
   RegistrationPage.assertIsCurrentPage();
   let email = "randomEmail" + Math.floor(Math.random()*1000) + "@gmail.com";
   RegistrationPage.emailInput.type(email);
   RegistrationPage.passwordInput.type("1337Haxxor");
   RegistrationPage.passwordRepeatInput.type("1337Haxxor");
   RegistrationPage.securityQuestionField.click();
   RegistrationPage.securityQuestionFieldItems.contains("Mother's maiden name?").click();
   RegistrationPage.securityAnswerField.type("someRandomAnswer");
   RegistrationPage.registerButton.click();
   RegistrationPage.toastMessage.should('contain', "Registration completed successfully. You can now log in.");
  });

  it("Login",() => {
    HomePage.accountButton.click();
    HomePage.loginButton.click();
    LoginPage.assertIsCurrentPage();
    LoginPage.emailInput.type("demo");
    LoginPage.passwordInput.type("demo");
    LoginPage.loginButton.click();
    HomePage.assertIsCurrentPage();
    HomePage.accountButton.click();
    HomePage.gotToUserProfileButton.should("contain", "demo");

  });

  describe("Juice-shop autologin", ()=>{
  beforeEach(()=> {
    cy.login("demo",'demo');
    HomePage.visit();
  });

  it("Login",()=>{
    HomePage.accountButton.click();
    HomePage.gotToUserProfileButton.should("contain","demo");
  });
  it("Search and validate Lemon", () =>{
    //Search for lemon
    HomePage.searchButton.click();
    HomePage.searchInputField.type("Lemon{enter}");
    //click on lemon
    HomePage.productCardName.contains("Lemon").click();
    //Validate - sour but full of vitamins
    HomePage.productCardDialogBox.should(
      "contain",
      "Sour but full of vitamins."
    );
  });
  
  it("Search 500ml and validate Lemon", () =>{
    //Search for 500ml
    HomePage.searchButton.click();
    HomePage.searchInputField.type("500ml{enter}");
    //Click on Lemon
    HomePage.productCardName.contains("Lemon").click();
    //Validate - Sour but full of vitamins
    HomePage.productCardDialogBox.should(
      "contain",
      "Sour but full of vitamins."
    );
  });

  it("Search 500ml and validate All cards", () =>{
    HomePage.searchButton.click();
    HomePage.searchInputField.type("500ml{enter}");
    HomePage.productCardName.contains("Eggfruit").click();
    HomePage.productCardDialogBox.should(
      "contain",
      "Now with even more exotic flavour"
    );
    HomePage.productCardDialogBoxCloseButton.click();
    HomePage.productCardName.contains("Lemon").click();
    HomePage.productCardDialogBox.should(
      "contain",
      "Sour but full of vitamins"
    );
    HomePage.productCardDialogBoxCloseButton.click();
    HomePage.productCardName.contains("Strawberry").click();
    HomePage.productCardDialogBox.should(
      "contain",
      "Sweet & tasty!");
  });

  it("Read a review for King", () =>{
    //Open King card
    HomePage.searchButton.click();
    HomePage.searchInputField.type("King{enter}");
    HomePage.productCardName.contains("King").click();
    //Expand review area
    HomePage.reviewsButton.wait(400).click();
    //Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf! 
    HomePage.comments.should(
      "contain",
      "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  });

  it("Add a review for Rapsberry", () =>{
    //Search for raps
    HomePage.searchButton.click();
    HomePage.searchInputField.type("Raspberry{enter}");
    //Open raps
    HomePage.productCardName.contains("Raspberry").click().wait(400);
    // Add review
    HomePage.reviewInputField.type("Tastes like 3.14")
    HomePage.submitButton.click();
    //Validate review
    HomePage.reviewsButton.wait(400).click();
    HomePage.comments.should(
      "contain",
      "Tastes like 3.14");
  });
  it("Add address", () =>{
    SavedAddressesPage.visit();
    // Click add new address
    SavedAddressesPage.addNewAddressButton.click();
    //Input all the necessary info
    CreateAddressPage.countryInput.type('USA');
    CreateAddressPage.nameInput.type("John");
    CreateAddressPage.mobileNumberInput.type('1234567890');
    CreateAddressPage.zipCodeInput.type('35678');
    CreateAddressPage.addressInput.type('Murica, Yeah');
    CreateAddressPage.cityInput.type('Johntown');
    CreateAddressPage.stateInput.type('Solid');
    // click submit
    CreateAddressPage.submitButton.click();
    CreateAddressPage.toastMessage.should(
    "contain",
    "The address at Johntown has been successfully added to your addresses.");
    // Validate - toast message
    SavedAddressesPage.rows.contains("USA").should("contain","USA");
    
    //Validate address
  });
  it("Add payment option", () =>{
    //Open payment methods
    SavedPaymentMethods.visit();
    SavedPaymentMethods.addNewCardButton.click();
    SavedPaymentMethods.cardInfoInput("Name").type("SomeRandomName");
    SavedPaymentMethods.cardInfoInput("Card Number").type("4534567895432567")
    SavedPaymentMethods.cardInfoMenuInput("Expiry Month").select("12");
    SavedPaymentMethods.cardInfoMenuInput("Expiry Year").select("2091");
    SavedPaymentMethods.submitButton.click();
    //add info
    SavedPaymentMethods.toastMessage.should("contain",
    "Your card ending with 2567 has been saved for your convenience.");

    // Validate the new card
    SavedPaymentMethods.rows
    .contains("SomeRandomName")
    .parent()
    .should("contain","************2567")
    //cy.get("mat-label").contains("Name").parents('div').find('input');
  });
  it.only("Increase wallet balance", () =>{
    //Open wallet page
    WalletPage.visit();
    //Store current wallet balance
    WalletPage.walletBalance.should("be.visible").then((el) => {
      cy.wrap(el.text()).as('startingValue');

    });
    const addedValue = 100;
    WalletPage.amountInput.type(addedValue);
    WalletPage.submitButton.click();
    WalletPaymentPage.assertIsCurrentPage();
    WalletPaymentPage.choosePaymentOption("Tim Tester");
    WalletPaymentPage.continueButton.click();
    WalletPaymentPage.toastMessage.should(
      "contain",
      "Wallet successfully charged."
    );
    WalletPage.assertIsCurrentPage();

    WalletPage.walletBalance.should("be.visible").then((el)=> {
      cy.get("@startingValue").then(startingValue =>{
        expect(parseFloat(el.text())).to.eq(
          parseFloat(startingValue) + addedValue
        );
      });
    });
    //add 100 moneys
    //Click continue
    //Choose card
    //Click continue
    //Validate that balance has increased
  });

});
});

