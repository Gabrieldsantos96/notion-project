import { Article } from 'domain/models'
import {
  getAllRepository,
  getByIDRepository,
  putByIDRepository
} from '../models/Article/'
import { ArticleRepository } from 'infra/db/usecases/articleRepository'

export class DBArticle
  implements getAllRepository, getByIDRepository, putByIDRepository
{
  private readonly articleRepository: ArticleRepository

  constructor(articleRepository: ArticleRepository) {
    this.articleRepository = articleRepository
  }
  async getArticles(): Promise<Article[]> {
    const response = await this.articleRepository.getArticles()
    return new Promise((resolve) => resolve(response))
  }
  async getArticleByID(id: Pick<Article, 'id'>): Promise<Article> {
    const response = await this.articleRepository.getArticleByID(id)
    return new Promise((resolve) => resolve(response))
  }

  async putArticleByID(
    articleId: string,
    data: Omit<Article, 'id'>
  ): Promise<Article> {
    const response = this.articleRepository.putArticleByID(articleId, data)
    return new Promise((resolve) => resolve(response))
  }
}
