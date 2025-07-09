'use client'

import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from 'convex/react'
import { useLocale } from 'next-intl'
import { dark } from '@clerk/themes'
import { createTheme, ThemeProvider, useColorScheme, useTheme } from '@mui/material/styles'
import * as clerkLocales from '@clerk/localizations'
import * as muiLocales from '@mui/material/locale'
import { useMemo } from 'react'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export function ClientProviders({ children }: {
  children: React.ReactNode
}) {
  const { colorScheme } = useColorScheme()

  const locale = useLocale()
  const clerkLocale =
    locale === 'en' ? clerkLocales['enUS'] :
    locale === 'de' ? clerkLocales['deDE'] :
    clerkLocales['enUS']
  const muiLocale =
    locale === 'en' ? muiLocales['enUS'] :
    locale === 'de' ? muiLocales['deDE'] :
    muiLocales['enUS']

  const theme = useTheme()
  const localizedTheme = useMemo(() => createTheme(theme, muiLocale), [theme, muiLocale])

  return (
    <ClerkProvider
      localization={ clerkLocale }
      appearance={{ baseTheme: colorScheme === 'dark' ? dark : undefined }}
    >
    <ConvexProviderWithClerk
      client={ convex }
      useAuth={ useAuth }
    >
    <ThemeProvider theme={ localizedTheme }>
      { children }
    </ThemeProvider>
    </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}
