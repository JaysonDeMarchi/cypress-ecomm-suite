import { When } from "cypress-cucumber-preprocessor/steps";

const creditCardData = {};
const creditCardSelectors = {}

When(/I populate my card information/, () => {
  cy.get(creditCardSelectors.field.number, { timeout: 3000 }).type(creditCardData.number);
  cy.get(creditCardSelectors.field.exp_month).select(creditCardData.exp_month);
  cy.get(creditCardSelectors.field.exp_year).select(creditCardData.exp_year);
  cy.get(creditCardSelectors.field.cvv).type(creditCardData.cvv);
});
