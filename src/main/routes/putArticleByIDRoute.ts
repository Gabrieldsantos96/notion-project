import { Router } from 'express'
import { adaptRoute } from 'main/adapters/express-route-adapter'
import { MakeSutPutArticleByID } from 'main/factories/Article/putArticleByID'

export default (router: Router): void => {
  router.put('/updateArticle/:id', adaptRoute(MakeSutPutArticleByID()))
}
