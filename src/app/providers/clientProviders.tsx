'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from 'convex/react'
import { useLocale } from 'next-intl'
import { enUS, deDE } from '@clerk/localizations'
import { dark } from '@clerk/themes'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export function ClientProviders({ children }: {
  children: React.ReactNode
}) {
  return (
    <UIProviders>
      <AuthDBProviders>
        { children }
      </AuthDBProviders>
    </UIProviders>
  )
}

function UIProviders({ children }: {
  children: React.ReactNode
}) {
  return (
    <HeroUIProvider>
      <ThemeProvider
        attribute='class'
        enableSystem={ true }
      >
        { children }
      </ThemeProvider>
    </HeroUIProvider>
  )
}

function AuthDBProviders({ children }: {
  children: React.ReactNode
}) {
  const { resolvedTheme: theme } = useTheme()
  const locale = useLocale()

  return (
    <ClerkProvider
      localization={ locale === 'de' ? deDE : enUS }
      appearance={{ baseTheme: theme === 'dark' ? dark : undefined }}
    >
      <ConvexProviderWithClerk
        client={ convex }
        useAuth={ useAuth }
      >
        { children }
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
