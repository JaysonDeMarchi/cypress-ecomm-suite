export const addToCart = {
  name: 'Add to Cart',
  run: () => {
    cy.get('[id=product-addtocart-button]').click();
  },
};
