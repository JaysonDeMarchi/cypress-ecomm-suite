import { Given } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

Given(/I have an FSA\/HSA product in my cart/, () => {
  cy.visit(data['pdp']['fsa_hsa']['path']);
  cy.wait(3000);
  cy.get(selectors['action']['pdp']['add_to_cart']).click();

  cy.get(
    selectors['info']['pdp']['add_to_cart_success'],
    { timeout: 5000 }
  ).contains(data['pdp']['add_to_cart_success']);
});
