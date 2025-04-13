import type { Metadata } from 'next'
import '../globals.css'
import { Providers } from './providers'
import { hasLocale } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Starter'
}

export default async function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} className='dark'>
      <body>
        <Providers>
          { children }
        </Providers>
      </body>
    </html>
  )
}
