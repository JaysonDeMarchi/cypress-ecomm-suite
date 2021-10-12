import { When } from "cypress-cucumber-preprocessor/steps";
import { selectors } from '../../fixture-map';

const checkoutActions = selectors['action']['checkout'];

When(/I continue to payment summary/, () => {
  cy.get(checkoutActions['payment_continue'], { timeout: 1500 }).click();
});
