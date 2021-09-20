export const guestShippingCreditCardOrder = {
  name: 'Place Guest Shipping Credit Card Order',
  before: () => {
    cy.fixture('pdp').then((pdpData) => {
      cy.visit(pdpData.fixture.path);
    });
    cy.get('[id=product-addtocart-button]').click();
    cy.wait(2000);
  },
  run: (fixture) => {
    const shippingAddress = fixture.shipping_address;
    const creditCard = fixture.credit_card;
    cy.get('[name=firstname]', { timeout: 6000 }).type(shippingAddress.firstname);
    cy.get('[name=lastname]').type(shippingAddress.lastname);
    cy.get('.enter-manual-address').click({force: true});
    cy.get('input[name^=street][name*=0]').type(shippingAddress.street_0);
    cy.get('input[name=city]').type(shippingAddress.city);
    cy.get('select[name=region_id]').select(shippingAddress.region);
    cy.get('input[name=postcode]').type(shippingAddress.postcode);
    cy.get('[name=shipping-email]').type(shippingAddress.email);
    cy.get('[name=telephone]').type(shippingAddress.phone_number);
    cy.wait(3000);
    cy.get('[data-role=opc-continue]', { timeout: 3000 }).click();
    cy.get('input[id=authnetcim-cc-number]', { timeout: 3000 }).type(creditCard.number);
    cy.get('select[id=authnetcim-cc-exp-month]').select(creditCard.exp_month);
    cy.get('select[id=authnetcim-cc-exp-year]').select(creditCard.exp_year);
    cy.get('input[id=authnetcim-cc-cid]').type(creditCard.cvv);
    cy.get('[id=authnetcim-continue]', { timeout: 1500 }).click();
    cy.get('[id=authnetcim-submit]', { timeout: 5000 }).click();
    cy.get('div[class=checkout-success]', { timeout: 6000 }).contains('Thank you for your order!');
  },
};
