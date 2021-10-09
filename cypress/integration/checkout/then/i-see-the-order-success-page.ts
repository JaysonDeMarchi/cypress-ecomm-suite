import { Then } from "cypress-cucumber-preprocessor/steps";

Then(/I see the order success page/, () => {
  cy.get('div[class=checkout-success]', { timeout: 6000 }).contains('Thank you for your order!');
});
