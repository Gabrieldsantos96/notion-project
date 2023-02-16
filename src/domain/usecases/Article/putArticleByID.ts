import { Article } from '@domain/models'

export interface PutArticleByID {
  putArticleByID(articleId: string, data: Omit<Article, 'id'>): Promise<Article>
}
