import type { Metadata } from 'next'
import '@/app/globals.css'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { ServerProviders } from '@/app/providers/serverProviders'
import { ClientProviders } from '@/app/providers/clientProviders'

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
          { children }
        </ClientProviders></ServerProviders>
      </body>
    </html>
  )
}
