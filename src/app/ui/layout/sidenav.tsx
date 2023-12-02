'use client'

import { open_suns } from '@/app/ui/fonts'
import Logo from '@/app/ui/logo'

const SideNav = (): JSX.Element => {
  return (
    <div
      id='side-nav'
      className='flex h-full flex-col px-3 py-4 md:px-2 border border-1'
    >
      <div id='logo' className='flex items-center mx-auto'>
        <Logo />
        <p
          className={`${open_suns.className} text-xl font-bold inline-block mx-2`}
        >
          Mangagement
        </p>
      </div>

      <div id='main-menu'></div>
    </div>
  )
}

export default SideNav
