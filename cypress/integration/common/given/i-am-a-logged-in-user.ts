import { Given } from "cypress-cucumber-preprocessor/steps";
import { data, selectors } from '../../fixture-map';

const envType = Cypress.config('name');
const loginData = data['login'];

Given(/I am a logged in user/, () => {
  if (envType === 'local') {
    cy.setCookie('casTgt', loginData['service_token']);
    cy.visit(loginData['path']);
  }
});
