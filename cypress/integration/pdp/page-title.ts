export const pageTitle = {
  name: 'Page Title',
  run: (fixture) => {
    cy.title().should('eq', fixture.page_title);
  },
}
