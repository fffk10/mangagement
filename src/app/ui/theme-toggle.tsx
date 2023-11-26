import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaRegMoon } from 'react-icons/fa6'
import { WiDaySunny } from 'react-icons/wi'

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const changeHandler = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <label className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          className='sr-only peer'
          onChange={changeHandler}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />

        <span className='ms-3 text-sm font-medium'>
          {theme === 'dark' ? <FaRegMoon /> : <WiDaySunny />}
        </span>
      </label>
    </>
  )
}

export default ThemeToggle
