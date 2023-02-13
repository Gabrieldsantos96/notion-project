import { Article } from 'domain/models'

export interface getAllRepository {
  getArticles(): Promise<Article[]>
}
