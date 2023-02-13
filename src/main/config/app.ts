import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
app.use(express.json({ limit: '50mb' }))
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
  })
)

export default app
