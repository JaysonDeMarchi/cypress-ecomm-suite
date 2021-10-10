import * as commonData from '../fixtures/data/common';
import * as commonSelectors from '../fixtures/selectors/common';
import * as beta8Data from '../fixtures/data/beta8';
import * as beta8Selectors from '../fixtures/selectors/beta8';

const environments = {
  'beta8': {
    'data': beta8Data,
    'selectors': beta8Selectors,
  },
};

export const data = {
  ...commonData,
  ...environments[Cypress.config('name')]['data'],
};

export const selectors = {
  ...commonSelectors,
  ...environments[Cypress.config('name')]['selectors'],
};
