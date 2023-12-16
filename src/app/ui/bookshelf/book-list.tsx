import { Book } from '@/app/types/book'

type BookListProps = {
  bookList: Book[]
}

const BookList = ({ bookList }: BookListProps): JSX.Element | null => {
  if (!bookList || !(bookList.length > 0)) {
    return null
  }

  return (
    <ul>
      {bookList.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  )
}

export default BookList
