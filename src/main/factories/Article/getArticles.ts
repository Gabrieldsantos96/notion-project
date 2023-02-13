import { GetAllArticlesController } from 'presentation/controllers/Article/getArticles'

import { LogControllerDecorator } from 'decorators/log'
import { Controller } from 'domain/models'
import { makeSutDBArticle } from './DBArticle'

export const makeSutGetArticles = (): Controller => {
  const controller = new GetAllArticlesController(makeSutDBArticle())
  return new LogControllerDecorator(controller)
}
