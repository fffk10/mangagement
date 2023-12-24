import { Comic } from '@/app/types/comic'

type ComicListProps = {
  comics: Comic[]
}

const ComicList = ({ comics: comics }: ComicListProps): JSX.Element | null => {
  if (!comics || !(comics.length > 0)) {
    return null
  }

  return (
    <ul>
      {comics.map((comic) => (
        <li key={comic.id}>{comic.title}</li>
      ))}
    </ul>
  )
}

export default ComicList
