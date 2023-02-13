import {
  GetArticleByID,
  GetArticles,
  PutArticleByID
} from 'domain/usecases/Article'
import { mongoHelper } from '../helpers/mongo-helper'
import { Article } from 'domain/models'
import { ObjectId } from 'mongodb'

export class ArticleRepository
  implements GetArticleByID, GetArticles, PutArticleByID
{
  async getArticles(): Promise<Article[]> {
    const articleCollection = await mongoHelper.getCollection('article')
    const articles: Article[] = []
    await articleCollection.find().forEach((e) => {
      articles.push(mongoHelper.objMapper(e))
    })

    return articles
  }

  async getArticleByID(articleId: Pick<Article, 'id'>): Promise<Article> {
    const articleCollection = await mongoHelper.getCollection('article')
    const filter = { _id: new ObjectId(articleId) }
    const article = await articleCollection.findOne(filter)

    return mongoHelper.objMapper(article)
  }

  async putArticleByID(
    articleId: string,
    data: Omit<Article, 'id'>
  ): Promise<Article> {
    const articleCollection = await mongoHelper.getCollection('article')
    const filter = { _id: new ObjectId(articleId) }
    await articleCollection.updateOne(filter, { $set: { items: data } })
    const updatedArticle = await articleCollection.findOne(filter)
    return mongoHelper.objMapper(updatedArticle)
  }
}
