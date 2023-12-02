'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

const ThemeStoreProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}

export default ThemeStoreProvider
