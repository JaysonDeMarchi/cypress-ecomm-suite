import { When } from "cypress-cucumber-preprocessor/steps";

const shippingAddressData = {};
const shippingAddressSelectors = {}

When(/I proceed to the payment step/, () => {
  cy.get(shippingAddressSelectors.action.shipping_continue).click();
});
