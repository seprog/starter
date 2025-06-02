import { MainNavbar } from '@/app/[locale]/navbar'

describe('Main Navbar', () => {
  it('displays title', () => {
    cy.mount(<MainNavbar />).screenshot()
    cy.get('a').contains('Starter')
  })
})