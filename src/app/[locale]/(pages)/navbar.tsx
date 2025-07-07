'use client'

import { useTranslations } from 'next-intl'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/react'
import { useTheme } from 'next-themes'
import { dark } from '@clerk/themes'

const navbarItems = [
  { key: 'page1', name: 'Page 1', href: '/page1' },
  { key: 'page2', name: 'Page 2', href: '/page2' }
]

export function PagesNavbar() {
  const t = useTranslations('navbar')

  return (
    <Navbar isBlurred isBordered maxWidth='full'>
      <NavbarMenuToggle className='md:hidden' />
      <NavbarMenu>
        { navbarItems?.map(({ key, name, href }) => (
          <NavbarMenuItem key={key}>
            <Link color='foreground' href={href}>{ name }</Link>
          </NavbarMenuItem>
        )) }
      </NavbarMenu>
      <NavbarBrand>
        <Link
          className='text-xl font-bold'
          color='foreground'
          href='/'
        >{ t('title') }</Link>
      </NavbarBrand>
      <NavbarContent className='not-md:hidden'>
        { navbarItems?.map(({ key, name, href }) => (
          <NavbarMenuItem key={key}>
            <Link color='foreground' href={href}>{ name }</Link>
          </NavbarMenuItem>
        )) }
      </NavbarContent>
      <UserNavbarContent />
    </Navbar>
  )
}

function UserNavbarContent() {
  const { resolvedTheme: theme } = useTheme()

  return (
    <NavbarContent justify='end'><NavbarItem>
      <Authenticated>
        <UserButton appearance={{
          baseTheme: theme === 'dark' ? dark : undefined,
          layout: {
            shimmer: false
          }
        }} />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </NavbarItem></NavbarContent>
  )
}
