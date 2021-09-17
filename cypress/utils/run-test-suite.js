export default (testSuite) => {
  const area = Cypress.config('areas')[testSuite.area];

  describe(area.name, () => {
    beforeEach(() => {
      cy.visit(area.path);
    });

    testSuite.tests.forEach(test => {
      it(test.name, () => {
        test.run();
      });
    });
  });
};
