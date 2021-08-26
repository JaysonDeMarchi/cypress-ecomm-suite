describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Logo Functionality', () => {
    cy.get('a.cx-header-menu__logo').click();
    cy.location('pathname').should('eq', '/');
  });
});
