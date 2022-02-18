import * as commonData from '../fixtures/data/common';
import * as commonSelectors from '../fixtures/selectors/common';
import * as beta8Data from '../fixtures/data/beta8';
import * as beta8Selectors from '../fixtures/selectors/beta8';
import * as localData from '../fixtures/data/local';
import * as localSelectors from '../fixtures/selectors/local';
import * as sqat8Data from '../fixtures/data/sqat8';
import * as sqat8Selectors from '../fixtures/selectors/sqat8';

const environments = {
  'beta8': {
    'data': beta8Data,
    'selectors': beta8Selectors,
  },
  'local': {
    'data': localData,
    'selectors': localSelectors,
  },
  'sqat8': {
    'data': sqat8Data,
    'selectors': sqat8Selectors,
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
