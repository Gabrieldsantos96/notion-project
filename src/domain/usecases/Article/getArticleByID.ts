import { Article } from '@domain/models'

export interface GetArticleByID {
  getArticleByID(id: Pick<Article, 'id'>): Promise<Article>
}
