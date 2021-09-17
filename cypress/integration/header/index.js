import runTestSuite from '../../utils/run-test-suite';
import logo from './logo';

const testSuite = {
  area: 'home',
  tests: [
    logo,
  ],
};

runTestSuite(testSuite);
