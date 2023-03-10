import request from 'supertest'
import app from '../config/app'

describe('Content type middleware', () => {
  test('should return default content type as json', async () => {
    app.get('/test_content', (req, res) => {
      res.send()
    })
    await request(app).get('/test_content').expect('content-type', /json/)
  })

  test('should return xml content-type when forced', async () => {
    app.get('/test_content_xml', (req, res) => {
      res.type('xml')
      res.send()
    })
    await request(app).get('/test_content_xml').expect('content-type', /xml/)
  })
})
