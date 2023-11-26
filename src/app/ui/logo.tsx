import Image from 'next/image'
import { useTheme } from 'next-themes'

const Logo = () => {
  const { theme } = useTheme()

  if (theme === 'light') {
    return (
      <Image
        src='/logo-light.png'
        width={50}
        height={50}
        alt='light theme logo image'
      />
    )
  }

  return (
    <Image
      src='/logo-dark.png'
      width={50}
      height={50}
      alt='dark theme logo image'
    />
  )
}

export default Logo
