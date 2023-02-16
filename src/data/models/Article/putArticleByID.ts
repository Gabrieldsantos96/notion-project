import { Article } from '@domain/models/Article'

export interface putByIDRepository {
  putArticleByID(articleId: string, data: Omit<Article, 'id'>): Promise<Article>
}
