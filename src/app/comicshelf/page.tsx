import ComicList from '@/app/ui/comicshelf/comic-list'
import PageTitle from '@/app/ui/common/page-title'
import { fetchComics } from '@/app/lib/data'
import { Comic } from '@/app/types/comic'

const ComicshelfPage = async (): Promise<JSX.Element> => {
  const comics: Comic[] = await fetchComics()
  return (
    <>
      <PageTitle text='Comicshelf' />
      <ComicList comics={comics} />
    </>
  )
}

export default ComicshelfPage
