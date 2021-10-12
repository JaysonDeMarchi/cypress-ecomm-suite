import { When } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

const checkoutActions = selectors['action']['checkout'];

When(/I select an FSA\/HSA new card/, () => {
  cy.get(checkoutActions['fsa_hsa_new_card']).check({ force: true });
});
