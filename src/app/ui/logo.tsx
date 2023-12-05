import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useLayoutEffect, useState } from 'react'
import { LogoSkelton } from '@/app/ui/skeltons'

const Logo = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // return <LogoSkelton />
    return null
  }

  if (theme === 'dark') {
    return (
      <Image
        src='/logo-dark.png'
        width={50}
        height={50}
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
