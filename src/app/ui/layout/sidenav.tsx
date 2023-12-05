'use client'

import { open_suns, rubik } from '@/app/ui/fonts'
import Logo from '@/app/ui/logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaHome, FaEdit } from 'react-icons/fa'

type Menu = {
  icon: JSX.Element
  title: string
}

const MAIN_MENU_LIST: Menu[] = [
  { icon: <FaHome />, title: 'Dashboard' },
  { icon: <FaEdit />, title: 'Edit' },
]

const SideNav = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      id='side-nav'
      className='flex h-full flex-col px-3 py-4 md:px-2 border border-1'
    >
      <div id='logo' className='flex items-center mx-auto my-2'>
        <Logo />
        <p
          className={`${open_suns.className} text-xl font-bold inline-block mx-2`}
        >
          Mangagement
        </p>
      </div>

      <nav id='main-menu' className='my-8 px-4 hidden md:block'>
        <h2 className={`${rubik.className} text-sm text-gray-400`}>
          MAIN MENU
        </h2>

        <ul className='p-2'>
          {MAIN_MENU_LIST.map((menu: Menu) => {
            return (
              <li key={menu.title} className='my-2'>
                <Link
                  href={`/${menu.title.toLocaleLowerCase()}`}
                  className={`${
                    pathname === `/${menu.title.toLocaleLowerCase()}` &&
                    'bg-gray-200'
                  } flex items-center rounded-lg px-4 py-2 hover:bg-gray-200 active:bg-gray-200`}
                >
                  {menu.icon}
                  <p className='mx-2'>{menu.title}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SideNav
