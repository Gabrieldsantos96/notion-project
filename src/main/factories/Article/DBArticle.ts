import { DBArticle } from '@data/usecases/articles'
import { ArticleRepository } from '@infra/db/usecases/articleRepository'

export const makeSutDBArticle = () => {
  const repository = new ArticleRepository()
  return new DBArticle(repository)
}
