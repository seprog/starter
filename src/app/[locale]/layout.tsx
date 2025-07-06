import type { Metadata } from 'next'
import '../globals.css'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { MainNavbar } from './navbar'
import { ServerProviders } from './providers/serverProviders'
import { ClientProviders } from './providers/clientProviders'

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
        <ServerProviders><ClientProviders>
          <MainNavbar items={[
            { key: 'item1', content: <>Item 1</> },
            { key: 'item2', content: <>Item 2</> }
          ]} />
          { children }
        </ClientProviders></ServerProviders>
      </body>
    </html>
  )
}
