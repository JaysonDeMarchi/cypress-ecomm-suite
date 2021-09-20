import { runTestSuite } from '../../utils/run-test-suite';
import { guestShippingCreditCardOrder } from './guest-shipping-credit-card-order';

const area = 'checkout';
const tests = [
  guestShippingCreditCardOrder,
];

runTestSuite({ area, tests });
