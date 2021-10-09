import { When } from "cypress-cucumber-preprocessor/steps";

When(/I place my order/, () => {
  cy.get('[id=authnetcim-submit]', { timeout: 5000 }).click();
});
