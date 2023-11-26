import type { Metadata } from 'next'
import '@/app/ui/globals.css'
import { inter } from '@/app/ui/fonts'
import Providers from '@/app/context/providers'

export const metadata: Metadata = {
  title: 'Mangagement',
  description: 'Manga mangement web app by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className}  bg-white dark:bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
