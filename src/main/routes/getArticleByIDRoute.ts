import { Router } from 'express'

import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeSutGetArticleByIDController } from '@main/factories/Article/getArticleByID'

export default (router: Router): void => {
  router.get('/getArticle/:id', adaptRoute(makeSutGetArticleByIDController()))
}
