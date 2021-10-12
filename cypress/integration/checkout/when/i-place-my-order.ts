import { When } from "cypress-cucumber-preprocessor/steps";
import { selectors } from '../../fixture-map';

const checkoutActions = selectors['action']['checkout'];

When(/I place my order/, () => {
  cy.get(checkoutActions['place_order'], { timeout: 5000 }).click();
});
