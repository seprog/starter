import Home from '@/app/[locale]/page'

describe('Main Navbar', () => {
  it('displays title', () => {
    cy.mount(<Home />).screenshot()
    cy.get('a').contains('Starter')
  })

  it('displays items', () => {
    cy.mount(
      <Home />
    ).screenshot()
    cy.contains('Item 1')
    cy.contains('Item 2')
  })
})