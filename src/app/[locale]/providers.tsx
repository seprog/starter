'use client'

import { HeroUIProvider } from '@heroui/react'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function Providers({ children }: {
  children: React.ReactNode
}) {
  // TODO hydration error (https://github.com/heroui-inc/heroui/issues/2073#issuecomment-1953728672)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])

  return isClient ? (
    <HeroUIProvider>
      <ThemeProvider attribute='class' enableSystem={true}>
        <SessionProvider>
          { children }
        </SessionProvider>
      </ThemeProvider>
    </HeroUIProvider>
  ) : <></>
}
