import { Article, Controller } from '@domain/models'
import { GetArticleByID } from '@domain/usecases/Article/'
import { InvalidParamError } from '@presentation/errors'
import { badRequest, serverError, success } from '@presentation/helpers'
import { httpRequest, httpResponse } from '@presentation/models'
import { idValidatorAdapter } from '@presentation/models/idValidator'

export class GetArticleByIDController implements Controller {
  private readonly db: GetArticleByID
  private readonly idValidator: idValidatorAdapter

  constructor(helper: GetArticleByID, idValidator: idValidatorAdapter) {
    this.db = helper
    this.idValidator = idValidator
  }

  async handle(httpRequest: httpRequest): Promise<httpResponse> {
    try {
      const {
        params: { id }
      } = httpRequest

      const validator = this.idValidator.isValid(id)

      if (!validator) {
        return badRequest(new InvalidParamError('id'))
      }

      const article = await this.db.getArticleByID(
        id as unknown as Pick<Article, 'id'>
      )

      return success(article)
    } catch {
      return serverError()
    }
  }
}
