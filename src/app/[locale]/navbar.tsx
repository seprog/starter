'use client'

import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, User } from '@heroui/react'
import { useTranslations } from 'next-intl'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { LuLogIn, LuLogOut, LuSettings, LuUser } from 'react-icons/lu'

export function MainNavbar({ items }: {
  items?: {
    key: React.Key
    content: React.ReactNode
  }[]
}) {
  const t = useTranslations('navbar')

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
          href={window.origin}
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
  const t = useTranslations('navbar')
  const router = useRouter()
  const { status, data: session } = useSession()

  return (
    <NavbarContent justify='end'><NavbarItem>
      { status === 'authenticated'
        ? (
          <Dropdown>
            <DropdownTrigger>
              <div>
                <User
                  className='not-xl:hidden'
                  name={ session.user.name ?? undefined }
                  avatarProps={{ src: session.user.image ?? undefined }}
                />
                <Avatar
                  className='xl:hidden'
                  aria-label={ session.user.name ?? undefined }
                  src={ session.user.image ?? undefined}
                />
              </div>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem key='profile' onPress={ () => router.push(`${window.origin}/user/${session.user.id}`) }>
                <div className='flex flex-nowrap gap-1 items-center'><LuUser />{ t('profile') }</div>
              </DropdownItem>
              <DropdownItem key='settings' onPress={ () => router.push(`${window.origin}/user/${session.user.id}/settings`) }>
                <div className='flex flex-nowrap gap-1 items-center'><LuSettings />{ t('settings') }</div>
              </DropdownItem>
              <DropdownItem key='logout' color='danger' variant='flat' onPress={() => signOut()}>
                <div className='flex flex-nowrap gap-1 items-center'><LuLogOut />{ t('logout') }</div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Button
            variant='flat'
            isLoading={ status === 'loading' }
            onPress={ () => signIn() }
          ><LuLogIn />{ t('login') }</Button>
        )
      }
    </NavbarItem></NavbarContent>
  )
}
