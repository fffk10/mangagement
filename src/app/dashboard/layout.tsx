import Header from '@/app/ui/layout/header'
import Footer from '@/app/ui/layout/footer'
import ThemeContextProvider from '@/app/context/providers'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
