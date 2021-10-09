import { When } from "cypress-cucumber-preprocessor/steps";

When(/I continue to payment summary/, () => {
  cy.get('[id=authnetcim-continue]', { timeout: 1500 }).click();
});
