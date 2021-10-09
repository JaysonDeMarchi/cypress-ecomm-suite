import { When } from "cypress-cucumber-preprocessor/steps";

When(/I am at checkout/, () => {
  cy.visit('/checkout');
});
