describe('Product Landing Page', () => {
  let category = {};
  before(() => {
    cy.fixture('plp').then((data) => {
      category = data.category;
    });
  });

  beforeEach(() => {
    cy.visit(`/shop/${category.uri}`);
  });

  it('Page Title', () => {
    cy.title().should('eq', category.page_title);
  });

  it('Breadcrumbs', () => {
    const breadcrumbs = category.breadcrumbs;
    cy.get('div.breadcrumbs > ul > li').as('breadcrumbs');

    cy.get('@breadcrumbs').should(
      'have.length',
      breadcrumbs.length
    ).each(
      (breadcrumb, index) => {
        cy.wrap(breadcrumb).should(
          'contain.text',
          breadcrumbs[index]
        );
      }
    );
  });

  it('Add to Cart', () => {
    cy.get('button[title="Add to Cart"]');
  });

  it('Sort By', () => {
  });

  it('PDP', () => {
  });

  it('Narrow By', () => {
  });

  it('Pagination', () => {
  });
});
