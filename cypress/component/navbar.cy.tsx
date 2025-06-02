import { MainNavbar } from '@/app/[locale]/navbar'

describe('Main Navbar', () => {
  it('displays title', () => {
    cy.mount(<MainNavbar />).screenshot()
    cy.get('a').contains('Starter')
  })

  it('displays items', () => {
    cy.mount(
      <MainNavbar items={[
        { key: 'item1', content: <>Item 1</> },
        { key: 'item2', content: <>Item 2</> }
      ]} />
    ).screenshot()
    cy.contains('Item 1')
    cy.contains('Item 2')
  })
})