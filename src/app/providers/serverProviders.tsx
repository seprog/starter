import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { NextIntlClientProvider } from 'next-intl'
import theme from '@/theme'

export function ServerProviders({ children }: {
  children: React.ReactNode
}) {
  return (
    <NextIntlClientProvider>
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
    <ThemeProvider theme={ theme }>
      { children }
    </ThemeProvider>
    </AppRouterCacheProvider>
    </NextIntlClientProvider>
  )
}
