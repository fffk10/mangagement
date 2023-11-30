import { signOut } from 'next-auth/react'

const LogoutButton: React.FC = () => {
  return (
    <button
      className='text-xs hover:bg-gray-200 dark:hover:bg-gray-700 py-2 px-4 border border-gray-400 rounded shadow'
      onClick={() => signOut()}
    >
      ログアウト
    </button>
  )
}

export default LogoutButton
