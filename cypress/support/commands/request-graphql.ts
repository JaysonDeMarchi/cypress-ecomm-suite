Cypress.Commands.add('requestGraphql', (query: string): Promise<any> => {
  return cy.request({
    method: 'POST',
    url: Cypress.config('graphql').path,
    body: {
      query,
    },
  })
});
