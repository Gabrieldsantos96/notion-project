import { GetArticleByIDController } from '@presentation/controllers/Article/getArticleByID'
import { LogControllerDecorator } from '@decorators/log'
import { Controller } from '@domain/models'
import { makeSutDBArticle } from './DBArticle'
import { idValidator } from '@utils/idValidatorAdapter'

export const makeSutGetArticleByIDController = (): Controller => {
  const validator = new idValidator()
  const controller = new GetArticleByIDController(makeSutDBArticle(), validator)
  return new LogControllerDecorator(controller)
}
