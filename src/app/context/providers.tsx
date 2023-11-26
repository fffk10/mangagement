'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default Providers
