const { db } = require('@vercel/postgres')
const bcrypt = require('bcrypt')

const {
  usersData,
  comicsData,
  userComicsData,
} = require('../src/app/lib/placeholder-data.js')

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL  
      );
    `

    console.log(`Created "users" table`)

    // Insert data into the "revenue" table
    const insertedUsers = await Promise.all(
      usersData.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return client.sql`
        INSERT INTO users (id, name, email, password, created_at, updated_at)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.created_at}, ${user.updated_at})
        ON CONFLICT (id) DO NOTHING;
      `
      })
    )

    console.log(`Seeded ${insertedUsers.length} users`)

    return {
      createTable,
      revenue: insertedUsers,
    }
  } catch (error) {
    console.error('Error seeding users:', error)
    throw error
  }
}

async function seedComics(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE comics (
        id SERIAL PRIMARY KEY,
        google_book_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        authors VARCHAR(255) ARRAY NOT NULL, 
        thumbnail VARCHAR(255)
      );
`

    console.log(`Created "comics" table`)

    const insertedComics = await Promise.all(
      comicsData.map(
        (comic) => client.sql`
        INSERT INTO comics (google_book_id, title, authors, thumbnail)
        VALUES (${comic.google_book_id}, ${comic.title}, ${comic.authors}, ${comic.thumbnail})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    )

    console.log(`Seeded ${insertedComics.length} comics`)

    return {
      createTable,
      comicsData: insertedComics,
    }
  } catch (error) {
    console.error('Error seeding comics:', error)
    throw error
  }
}

async function seedUserComics(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE user_comics (
        id SERIAL PRIMARY KEY,
        user_id UUID NOT NULL,
        comic_id SERIAL NOT NULL,
        current_page INTEGER,
        current_chapter INTEGER,
        current_chapter_title VARCHAR(255),
        status INTEGER NOT NULL,
        registered_at TIMESTAMP NOT NULL,
        updated_at TIMESTAMP NOT NULL,
        
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (comic_id) REFERENCES comics(id)
      )
    `

    console.log(`Created "user_comics" table`)

    const insertedUserComics = await Promise.all(
      userComicsData.map(
        (userComic) => client.sql`
        INSERT INTO user_comics (user_id, comic_id, current_page, current_chapter, current_chapter_title, status, 
          registered_at, updated_at)
        VALUES (${userComic.user_id}, ${userComic.comic_id}, ${userComic.current_page}, ${userComic.current_chapter}, 
          ${userComic.current_chapter_title}, ${userComic.status}, ${userComic.registered_at}, ${userComic.updated_at});
      `
      )
    )

    console.log(`Seeded ${insertedUserComics.length} userComics`)

    return {
      createTable,
      userComicsData: insertedUserComics,
    }
  } catch (error) {
    console.error('Error seeding userComics:', error)
    throw error
  }
}

async function main() {
  const client = await db.connect()

  await seedUsers(client)
  await seedComics(client)
  await seedUserComics(client)
  await client.end()
}

main().catch((err) => {
  console.error('An error occurred while attempting to seed the database:', err)
})
