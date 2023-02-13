import { Article } from 'domain/models'

export interface GetArticles {
  getArticles(): Promise<Article[]>
}
