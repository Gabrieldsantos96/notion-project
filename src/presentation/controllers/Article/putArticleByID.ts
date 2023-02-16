import { Controller } from '@domain/models'
import { PutArticleByID } from '@domain/usecases/Article'

import { InvalidParamError } from '@presentation/errors'
import { badRequest, serverError, success } from '@presentation/helpers'
import { httpRequest, httpResponse } from '@presentation/models'
import { idValidatorAdapter } from '@presentation/models/idValidator'

export class PutArticleController implements Controller {
  private readonly db: PutArticleByID
  private readonly idValidator: idValidatorAdapter

  constructor(helper: PutArticleByID, validator: idValidatorAdapter) {
    this.idValidator = validator
    this.db = helper
  }

  async handle(httpRequest: httpRequest): Promise<httpResponse> {
    try {
      const {
        body,
        params: { id }
      } = httpRequest

      const validator = this.idValidator.isValid(id)

      if (!validator) {
        return badRequest(new InvalidParamError('id'))
      }
      const article = await this.db.putArticleByID(id, body)
      return success(article)
    } catch {
      return serverError()
    }
  }
}
