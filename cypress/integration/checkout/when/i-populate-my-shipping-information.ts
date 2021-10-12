import { When } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

const checkoutActions = selectors['action']['checkout'];
const shippingAddressData = data['checkout']['shipping_address'];
const shippingAddressFields = selectors['field']['checkout']['shipping_address'];

When(/I populated my shipping information/, () => {
  cy.wait(3000);
  cy.get(shippingAddressFields['firstname'], { timeout: 6000 }).type(shippingAddressData['firstname']);
  cy.get(shippingAddressFields['lastname'], { timeout: 6000 }).type(shippingAddressData['lastname']);
  cy.get(shippingAddressFields['street_0'], { timeout: 6000 }).type(shippingAddressData['street_0']);
  cy.get(checkoutActions.enter_manual_address, { timeout: 7000 }).click({ force: true });
  cy.get(shippingAddressFields['city'], { timeout: 6000 }).type(shippingAddressData['city']);
  cy.get(shippingAddressFields['postcode'], { timeout: 6000 }).type(shippingAddressData['postcode']);
  cy.get(shippingAddressFields['region']).select(shippingAddressData['region']);
  cy.get(shippingAddressFields['email'], { timeout: 6000 }).type(shippingAddressData['email']);
  cy.get(shippingAddressFields['telephone'], { timeout: 6000 }).type(shippingAddressData['telephone']);
});
