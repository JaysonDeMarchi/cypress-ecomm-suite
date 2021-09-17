import { runTestSuite } from '../../utils/run-test-suite';
import { logo } from './logo';

const area = 'header';
const tests = [
  logo,
];

runTestSuite({ area, tests });
