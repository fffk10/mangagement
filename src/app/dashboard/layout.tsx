import { PropsWithChildren } from 'react'
import Header from '@/app/ui/layout/header'
import Footer from '@/app/ui/layout/footer'
import SideNav from '@/app/ui/layout/sidenav'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-0'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
