describe('Locale redirects', () => {
  it('redirects to default locale page', () => {
    cy.visit('/').screenshot()
    cy.url().should('include', '/en')
  })
})