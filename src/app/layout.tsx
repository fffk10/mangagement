import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { PropsWithChildren } from 'react'
import { inter } from '@/app/ui/fonts'
import ThemeStoreProvider from '@/app/providers/theme-providers'
import NextAuthProvider from '@/app/providers/next-auth'
import Footer from '@/app/ui/layout/footer'
import Header from '@/app/ui/layout/header'
import SideNav from '@/app/ui/layout/sidenav'

export const metadata: Metadata = {
  title: 'Mangagement',
  description: 'Manga mangement web app by create next app',
}

const RootLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className}  bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <NextAuthProvider>
          <ThemeStoreProvider>
            <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
              <div className='w-full flex-none md:w-64'>
                <SideNav />
              </div>
              <div className='flex-grow p-6 md:overflow-y-auto md:p-0'>
                <Header />
                <div className='px-6 py-4'>{children}</div>
                <Footer />
              </div>
            </div>
          </ThemeStoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
