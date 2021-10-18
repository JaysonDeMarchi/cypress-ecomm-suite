import { Given } from "cypress-cucumber-preprocessor/steps";

Given(/I have Kidcents applied/, () => {
  cy.visit('/kidcents/apply?noRedirect=1');
});
