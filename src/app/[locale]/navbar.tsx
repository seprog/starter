'use client'

import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/react'
import { useLocale, useTranslations } from 'next-intl'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'

export function MainNavbar({ items }: {
  items?: {
    key: React.Key
    content: React.ReactNode
  }[]
}) {
  const t = useTranslations('navbar')
  const locale = useLocale()

  return (
    <Navbar isBlurred isBordered maxWidth='full'>
      <NavbarMenuToggle className='md:hidden' />
      <NavbarMenu>
        { items?.map(({ key, content }) => (
          <NavbarMenuItem key={key}>{ content }</NavbarMenuItem>
        )) }
      </NavbarMenu>
      <NavbarBrand>
        <Link
          className='text-xl font-bold'
          color='foreground'
          href={`/${locale}`}
        >{ t('title') }</Link>
      </NavbarBrand>
      <NavbarContent className='not-md:hidden'>
        { items?.map(({ key, content }) => (
          <NavbarItem key={key}>{ content }</NavbarItem>
        )) }
      </NavbarContent>
      <UserNavbarContent />
    </Navbar>
  )
}

function UserNavbarContent() {
  return (
    <NavbarContent justify='end'><NavbarItem>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </NavbarItem></NavbarContent>
  )
}
