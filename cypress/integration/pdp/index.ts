import { runTestSuite } from '../../utils/run-test-suite';
import { pageTitle } from './page-title';
import { addToCart } from './add-to-cart';

const area = 'pdp';
const tests = [
  pageTitle,
  addToCart,
];

runTestSuite({ area, tests });
