'use client'

import React, { useState } from 'react'
import Logo from '@/app/ui/logo'
import ThemeToggle from '@/app/ui/theme-toggle'
import LoginButton from '@/app/ui/layout/header/login-button'
import LogoutButton from '@/app/ui/layout/header/logout-button'
import { useSession } from 'next-auth/react'
import UserIcon from '@/app/ui/layout/header/user-icon'

const Header: React.FC = () => {
  const { data: session, status } = useSession()

  return (
    <header className='shadow-lg p-2 flex justify-between'>
      <Logo />
      <nav className='my-auto mx-4 flex justify-between'>
        {status === 'authenticated' ? (
          <>
            <UserIcon />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Header
