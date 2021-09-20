export const runTestSuite = (testSuite) => {
  const area = Cypress.config('areas')[testSuite.area];

  describe(area.name, () => {
    let fixture = {};
    before(() => {
      cy.fixture(testSuite.area).then((data) => {
        fixture = data?.fixture;
      });
    });
    beforeEach(() => {
      cy.visit(fixture?.path || area.path);
    });

    testSuite.tests.forEach(test => {
      before(() => {
        if (test.before) {
          test.before(fixture);
        }
      });

      it(test.name, () => {
        test.run(fixture);
      });
    });
  });
};
