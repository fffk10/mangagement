export type Book = {
  id: number
  title: string
  author: string
  detail: BookDetail
  insertDate: string
  updateDate: string
}

export type BookDetail = {
  [K: string]: string | number
}
