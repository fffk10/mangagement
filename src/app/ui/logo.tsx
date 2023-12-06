import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'

const Logo = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // skelton
    return <div className='h-12 w-12'></div>
  }

  if (theme === 'dark') {
    return (
      <Image
        src='/logo-dark.png'
        width={48}
        height={48}
        alt='dark theme logo image'
        priority
      />
    )
  }

  return (
    <Image
      src='/logo-light.png'
      width={50}
      height={50}
      alt='light theme logo image'
      priority
    />
  )
}

export default Logo
