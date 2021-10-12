import { When } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

const checkoutData = data['checkout'];
const checkoutActions = selectors['action']['checkout'];
const checkoutInfo = selectors['info']['checkout'];

When(/I proceed to the payment step/, () => {
  cy.wait(3000);
  cy.get(checkoutActions['shipping_continue']).click();
  cy.wait(6000);
  cy.get(checkoutInfo['payment_details_title'], { timeout: 2000 }).should('be.visible').contains(checkoutData['payment_details_title']);
});
