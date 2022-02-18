import { Given } from "cypress-cucumber-preprocessor/steps";

before(() => {
  cy.setCookie('qamode', 'true');
});

Given(/I am a guest user/, () => {
});
