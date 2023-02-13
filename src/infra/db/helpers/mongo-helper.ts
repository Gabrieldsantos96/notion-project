import { Collection, MongoClient } from 'mongodb'

export const mongoHelper = {
  client: null as MongoClient,
  url: null as unknown as string,

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async connect(url: string): Promise<void> {
    this.url = url
    this.client = await MongoClient.connect(url, {
      useUnifiedTopology: true
    })
  },
  async disconnect(): Promise<void> {
    await this.client.close()
    this.client = null
  },
  async getCollection(name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.url)
    }
    return this.client.db().collection(name)
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  objMapper(data: any): any {
    const { _id, ...rest } = data
    return { id: _id, ...rest }
  }
}
