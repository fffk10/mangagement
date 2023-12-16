import BookList from '@/app/ui/bookshelf/book-list'
import PageTitle from '@/app/ui/common/page-title'
import { Book } from '@/app/types/book'

const bookList: Book[] = [
  {
    id: 1,
    title: 'book-title1',
    author: 'author1',
    detail: {
      page: 10,
    },
    insertDate: '2023-12-12',
    updateDate: '2023-12-13',
  },
  {
    id: 2,
    title: 'book-title2',
    author: 'author2',
    detail: {
      page: 10,
    },
    insertDate: '2023-12-12',
    updateDate: '2023-12-13',
  },
  {
    id: 3,
    title: 'book-title3',
    author: 'author3',
    detail: {
      page: 10,
    },
    insertDate: '2023-12-12',
    updateDate: '2023-12-13',
  },
]

const BookshelfPage = (): JSX.Element => {
  return (
    <>
      <PageTitle text='Bookshelf' />
      <BookList bookList={bookList} />
    </>
  )
}

export default BookshelfPage
