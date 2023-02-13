module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  },
  mongoURLEnvName: 'MONGO_URL'
}
