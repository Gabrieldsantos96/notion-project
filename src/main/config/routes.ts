import { Router } from 'express'
import fg from 'fast-glob'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (app: any): void => {
  const router = Router()
  app.use('/api', router)
  fg.sync('**/src/main/routes/**Route.ts').map(async (file) =>
    (await import(`../../../${file}`)).default(router)
  )
}
