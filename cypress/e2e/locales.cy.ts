describe('Locale redirects', () => {
  it('redirects to default locale page', () => {
    cy.visit('/')
    cy.url().should('include', '/en')
  })
})
