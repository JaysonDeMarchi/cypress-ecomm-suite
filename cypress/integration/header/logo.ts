export const logo = {
  name: 'Logo Functionality',
  run: () => {
    cy.get('a.cx-header-menu__logo').click();
    cy.location('pathname').should('eq', '/');
  }
};
