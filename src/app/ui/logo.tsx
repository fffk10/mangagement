import Image from 'next/image'
import { useTheme } from 'next-themes'

const Logo: React.FC = () => {
  const { theme } = useTheme()

  if (theme === 'light') {
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

export default Logo
