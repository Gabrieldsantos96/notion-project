import { Controller } from '@domain/models'
import { GetArticles } from '@domain/usecases/Article'
import { serverError, success } from '@presentation/helpers'
import { httpResponse } from '@presentation/models'

export class GetAllArticlesController implements Controller {
  private readonly db: GetArticles

  constructor(helper: GetArticles) {
    this.db = helper
  }

  async handle(): Promise<httpResponse> {
    try {
      const articles = await this.db.getArticles()
      return success(articles)
    } catch {
      return serverError()
    }
  }
}
