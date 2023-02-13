import { Article } from 'domain/models'

export interface getByIDRepository {
  getArticleByID(id: Pick<Article, 'id'>): Promise<Article>
}
