'use client'

import { HeroUIProvider } from '@heroui/react'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: {
  children: React.ReactNode
}) {
  return (
    <HeroUIProvider>
      <ThemeProvider attribute='class' enableSystem={ true }>
        <SessionProvider>
          { children }
        </SessionProvider>
      </ThemeProvider>
    </HeroUIProvider>
  )
}
