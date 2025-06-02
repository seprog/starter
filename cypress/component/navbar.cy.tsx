import { MainNavbar } from '@/app/[locale]/navbar'
import { useTranslations } from 'next-intl'

describe('Main Navbar', () => {
  it('displays title', () => {
    const t = useTranslations('navbar')
    cy.mount(<MainNavbar />)
    cy.get('a').contains(t('title'))
  })
})