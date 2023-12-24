import { unstable_noStore as noStore } from 'next/cache'
import { sql } from '@vercel/postgres'
import { Comic } from '@/app/types/comic'

export const fetchComics = async (): Promise<Comic[]> => {
  // cache check
  noStore()

  try {
    // delay
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const data = await sql<Comic>`SELECT * FROM comics`

    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch comics data.')
  }
}
