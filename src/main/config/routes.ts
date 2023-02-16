import { Router } from 'express'
import fg from 'fast-glob'
import { resolve } from 'path'

const ENV = resolve(__dirname, '..', 'routes', '**Route.*')

export default (app: any): void => {
  const router = Router()
  app.use('/api', router)
  fg.sync(ENV).map(async (file) => (await import(`${file}`)).default(router))
}
