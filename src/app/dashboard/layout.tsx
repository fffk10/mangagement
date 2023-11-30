import Header from '@/app/ui/layout/header'
import Footer from '@/app/ui/layout/footer'
import { PropsWithChildren } from 'react'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
