import { When } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

const creditCardData = data['checkout']['credit_card'];
const creditCardSelectors = selectors['field']['checkout']['credit_card'];

When(/I populate my card information/, () => {
  cy.get(creditCardSelectors.number, { timeout: 6000 }).type(creditCardData.number);
  cy.get(creditCardSelectors.exp_month).select(creditCardData.exp_month);
  cy.get(creditCardSelectors.exp_year).select(creditCardData.exp_year);
  cy.get(creditCardSelectors.cvv).type(creditCardData.cvv);
});
