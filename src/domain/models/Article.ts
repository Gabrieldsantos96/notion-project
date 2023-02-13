export type PostItem = {
  id: string
  type: string
  content?: string
}

export type Article = {
  id: string
  items: PostItem[]
}
