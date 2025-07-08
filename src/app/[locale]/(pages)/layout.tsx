import { Navbar } from './navbar'

export default async function Layout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      { children }
    </>
  )
}
