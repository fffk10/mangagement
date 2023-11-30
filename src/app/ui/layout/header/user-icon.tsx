import { useSession } from 'next-auth/react'
import Image from 'next/image'

const UserIcon: React.FC = () => {
  const { data: session } = useSession()

  return (
    <Image
      src={session?.user?.image ?? ''}
      alt='user icon'
      width={35}
      height={35}
      className='rounded-full mr-6'
    />
  )
}

export default UserIcon
