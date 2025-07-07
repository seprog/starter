'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { ConvexReactClient } from 'convex/react'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)

export function ClientProviders({ children }: {
  children: React.ReactNode
}) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute='class' enableSystem={ true }>
        <ClerkProvider>
          <ConvexProviderWithClerk client={ convex } useAuth={ useAuth }>
            { children }
          </ConvexProviderWithClerk>
        </ClerkProvider>
      </ThemeProvider>
    </HeroUIProvider>
  )
}
