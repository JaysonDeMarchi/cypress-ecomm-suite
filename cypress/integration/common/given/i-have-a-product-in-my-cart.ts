import { Given } from "cypress-cucumber-preprocessor/steps";

Given(/I have a product in my cart/, () => {
  cy.fixture('pdp').then((pdpData) => {
    cy.visit(pdpData.fixture.path);
  });
  cy.get('#product-addtocart-button').click();
  cy.get('.message-success', { timeout: 5000 }).contains('You added');
});
