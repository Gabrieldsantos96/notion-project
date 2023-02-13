import { Article } from 'domain/models'

export interface putByIDRepository {
  putArticleByID(articleId: string, data: Omit<Article, 'id'>): Promise<Article>
}
