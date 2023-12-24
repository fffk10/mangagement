const usersData = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: '山田太郎',
    email: 'yamada@example.com',
    password: 'password123',
    created_at: new Date(),
    updated_at: new Date(),
  },
]

const comicsData = [
  {
    google_book_id: '123456789xyz',
    title: '鬼滅の刃',
    authors: ['吾峠呼世晴'],
    thumbnail: 'https://thumbnail.jpg',
  },
  {
    google_book_id: '987654321xyz',
    title: 'ONE PIECE',
    authors: ['尾田栄一郎'],
    thumbnail: 'https://thumbnail2.jpg',
  },
]

const userComicsData = [
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    comic_id: 1,
    current_page: 30,
    current_chapter: 5,
    current_chapter_title: '伊之助、炭治郎と出会う',
    status: 1,
    registered_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: '410544b2-4001-4271-9855-fec4b6a6442a',
    comic_id: 2,
    current_page: 25,
    current_chapter: 10,
    current_chapter_title: '麦わらの一味、冒険始める',
    status: 0,
    registered_at: new Date(),
    updated_at: new Date(),
  },
]

module.exports = {
  usersData,
  comicsData,
  userComicsData,
}
