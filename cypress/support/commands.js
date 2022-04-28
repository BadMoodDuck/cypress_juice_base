// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// https://docs.cypress.io/api/commands/session#Updating-an-existing-login-custom-command
// Add custom login command

Cypress.Commands.add("login", (username, password) => {
    cy.session(
      [username, password],
      () => {
        cy.request({
          method: "POST",
          url: "/rest/user/login",
          body: { email: username, password: password },
        }).then(({ body }) => {
          cy.setCookie("token", body.authentication.token);
          cy.setCookie("cookieconsent_status", "dismiss");
          cy.setCookie("welcomebanner_status", "dismiss");
          cy.setCookie("language", "en");
          window.localStorage.setItem("token", body.authentication.token);
          window.sessionStorage.setItem("bid", body.authentication.bid);
        });
      },
      {
        validate() {
          cy.request("/whoami").its("status").should("eq", 200);
        },
      }
    );
  });