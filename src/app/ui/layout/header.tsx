'use client'

import React from 'react'
import Logo from '@/app/ui/logo'
import ThemeToggle from '@/app/ui/theme-toggle'

const Header: React.FC = () => {
  return (
    <header className='shadow-lg p-2 flex justify-between'>
      <Logo />
      <nav className='mx-0 my-auto mr-4'>
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
