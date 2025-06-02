import type { Metadata } from 'next'
import '../globals.css'
import { Providers } from './providers'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { MainNavbar } from './navbar'

export const metadata: Metadata = {
  title: 'Starter'
}

export default async function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()

  return (
    <html
      lang={ locale }
      className='dark'
      suppressHydrationWarning
    >
      <body className='flex flex-col min-h-screen'>
        <NextIntlClientProvider>
          <Providers>
            <MainNavbar items={[
              { key: 'item1', content: <>Item 1</> },
              { key: 'item2', content: <>Item 2</> }
            ]} />
            { children }
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
