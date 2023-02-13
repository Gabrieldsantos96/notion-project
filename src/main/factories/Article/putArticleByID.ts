import { PutArticleController } from 'presentation/controllers/Article/putArticleByID'
import { LogControllerDecorator } from 'decorators/log'
import { Controller } from 'domain/models'
import { makeSutDBArticle } from './DBArticle'
import { idValidator } from 'utils/idValidatorAdapter'

export const MakeSutPutArticleByID = (): Controller => {
  const validator = new idValidator()
  const controller = new PutArticleController(makeSutDBArticle(), validator)
  return new LogControllerDecorator(controller)
}
