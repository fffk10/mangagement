import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { PropsWithChildren } from 'react'
import { inter } from '@/app/ui/fonts'
import ThemeStoreProvider from '@/app/providers/theme-providers'
import NextAuthProvider from '@/app/providers/next-auth'

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
          <ThemeStoreProvider>{children}</ThemeStoreProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
