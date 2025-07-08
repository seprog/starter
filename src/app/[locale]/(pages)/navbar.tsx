'use client'

import { useTranslations } from 'next-intl'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { Authenticated, Unauthenticated } from 'convex/react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'

const navbarItems = [
  { key: 'page1', href: '/page1' },
  { key: 'page2', href: '/page2' },
]

export function Navbar() {
  const t = useTranslations('navbar')

  return (
    <AppBar position='static'>
      <Toolbar>
        <Link
          href='/'
          underline='none'
          fontWeight='bold'
          variant='h6'
          color='inherit'
        >{ t('title') }</Link>
        <NavItems />
        <UserNavbarContent />
      </Toolbar>
    </AppBar>
  )
}

function NavItems() {
  const t = useTranslations('navbar')

  return (
    <Stack
      direction='row'
      spacing={1}
      mx='auto'
    >
      { navbarItems?.map(({ key, href }) => (
        <Button
          key={ key }
          component={ Link }
          href={ href }
          color='inherit'
        >{ t(key) }</Button>
      )) }
    </Stack>
  )
}

function UserNavbarContent() {
  return (
    <Box display='flex'>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
    </Box>
  )
}
