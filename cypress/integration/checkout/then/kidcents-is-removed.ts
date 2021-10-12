import { Then } from "cypress-cucumber-preprocessor/steps";
import { selectors } from '../../fixture-map';

const checkoutInfo = selectors['info']['checkout'];

Then(/Kidcents is removed/, () => {
  cy.get(checkoutInfo['kidcents_sub_total']).should('not.be.visible');
});
