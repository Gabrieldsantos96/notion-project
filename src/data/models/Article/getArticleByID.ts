import { Article } from '@domain/models/Article'

export interface getByIDRepository {
  getArticleByID(id: Pick<Article, 'id'>): Promise<Article>
}
