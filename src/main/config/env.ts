// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export default {
  mongoUrl: process.env.MONGO_URL || '@example',
  port: process.env.PORT || 3333
}
