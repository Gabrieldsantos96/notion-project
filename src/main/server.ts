import { mongoHelper } from 'infra/db/helpers/mongo-helper'
import env from 'main/config/env'

mongoHelper
  .connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('main/config/app')).default
    app.listen(env.port, () =>
      console.log(`Server is running at locahost:${env.port}`)
    )
  })
  .catch(console.error)
