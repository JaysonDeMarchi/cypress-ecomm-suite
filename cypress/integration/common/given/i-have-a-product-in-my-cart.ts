import { Given } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

Given(/I have a product in my cart/, () => {
  cy.visit(data['pdp']['path']);
  cy.get(selectors['action']['pdp']['add_to_cart']).click();

  cy.get(
    selectors['info']['pdp']['add_to_cart_success'],
    { timeout: 5000 }
  ).contains(data['pdp']['add_to_cart_success']);
});
