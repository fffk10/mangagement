'use client'

import { useSession } from 'next-auth/react'
import ThemeToggle from '@/app/ui/theme-toggle'
import LoginButton from '@/app/ui/layout/header/login-button'
import LogoutButton from '@/app/ui/layout/header/logout-button'
import UserIcon from '@/app/ui/layout/header/user-icon'
import { useEffect, useState } from 'react'

const Header = (): JSX.Element | null => {
  const { status } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className='shadow-lg p-2 justify-end hidden md:flex'>
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
