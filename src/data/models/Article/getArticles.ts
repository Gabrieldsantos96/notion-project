import { Article } from '@domain/models/Article'

export interface getAllRepository {
  getArticles(): Promise<Article[]>
}
