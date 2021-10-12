import { Then } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

const checkoutSuccessData = data['checkout_success'];
const checkoutSuccessInfo = selectors['info']['checkout_success'];

Then(/I see the order success page/, () => {
  cy.get(checkoutSuccessInfo['success_message'], { timeout: 6000 }).contains(checkoutSuccessData['success_message']);
});
