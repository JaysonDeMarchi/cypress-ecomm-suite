import { When } from "cypress-cucumber-preprocessor/steps";

const shippingAddressData = {};
const shippingAddressSelectors = {}

When(/I populated my shipping information/, () => {
  cy.get(shippingAddressSelectors.field.firstname, { timeout: 6000 }).type(shippingAddressData.firstname);
  cy.get(shippingAddressSelectors.field.lastname).type(shippingAddressData.lastname);
  cy.get(shippingAddressSelectors.action.enter_manual_address).click({force: true});
  cy.get(shippingAddressSelector.street_0).type(shippingAddressData.street_0);
  cy.get(shippingAddressSelectors.field.city).type(shippingAddressData.city);
  cy.get(shippingAddressSelectors.field.region_id).select(shippingAddressData.region);
  cy.get(shippingAddressSelectors.field.postcode).type(shippingAddressData.postcode);
  cy.get(shippingAddressSelectors.field.shipping_email).type(shippingAddressData.email);
  cy.get(shippingAddressSelectors.field.telephone).type(shippingAddressData.phone_number);
});
