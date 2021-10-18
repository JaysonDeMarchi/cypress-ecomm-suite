import * as commonData from '../fixtures/data/common';
import * as commonSelectors from '../fixtures/selectors/common';
import * as beta8Data from '../fixtures/data/beta8';
import * as beta8Selectors from '../fixtures/selectors/beta8';
import * as localData from '../fixtures/data/local';
import * as localSelectors from '../fixtures/selectors/local';

const environments = {
  'beta8': {
    'data': beta8Data,
    'selectors': beta8Selectors,
  },
  'local': {
    'data': localData,
    'selectors': localSelectors,
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
