import { Router } from 'express'
import { adaptRoute } from '@main/adapters/express-route-adapter'
import { makeSutGetArticles } from '@main/factories/Article/getArticles'

export default (router: Router): void => {
  router.get('/', adaptRoute(makeSutGetArticles()))
}
