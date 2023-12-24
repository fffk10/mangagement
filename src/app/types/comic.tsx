export type Comic = {
  id: number
  title: string
  author: string
  detail: ComicDetail
  insertDate: string
  updateDate: string
}

export type ComicDetail = {
  [K: string]: string | number
}
