describe('Default locale redirect', () => {
  it('should redirect to appropriate locale page', () => {
    cy.visit('/')
    cy.url().should('include', '/en')
  })
})