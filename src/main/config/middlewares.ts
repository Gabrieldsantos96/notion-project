import { bodyParser } from '../middlewares/body-parser'
import { cors } from '../middlewares/cors'
import { contentType } from '../middlewares/content-type'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (app: any): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}
