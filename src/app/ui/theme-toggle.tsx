import React, { useLayoutEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaRegMoon } from 'react-icons/fa6'
import { WiDaySunny } from 'react-icons/wi'

const ThemeToggle = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const changeHandler = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useLayoutEffect(() => {
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
        <span
          className='block w-[2.5em] cursor-pointer bg-gray-500 rounded-full 
      p-[1px] after:block after:h-[1.25em] after:w-[1.25em] after:rounded-full 
      after:bg-white after:transition peer-checked:bg-blue-500 
      peer-checked:after:translate-x-[calc(100%-2px)] ml-4'
        ></span>

        <span className='ms-3 text-sm font-medium'>
          {theme === 'dark' ? <FaRegMoon /> : <WiDaySunny />}
        </span>
      </label>
    </>
  )
}

export default ThemeToggle
