import { Controller } from 'domain/models/Controller'
import { LogControllerDecorator } from './log'
import { httpRequest, httpResponse } from 'presentation/models'

const makeController = () => {
  class ControllerStub implements Controller {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(httpRequest: httpRequest): Promise<httpResponse> {
      const httpResponse = {
        statusCode: 200,
        body: {
          email: 'anyname@gmail.com',
          name: 'anyname'
        }
      }
      return new Promise((resolve) => resolve(httpResponse))
    }
  }
  return new ControllerStub()
}

const makeSut = () => {
  const controllerStub = makeController()
  const sut = new LogControllerDecorator(controllerStub)
  return {
    controllerStub,
    sut
  }
}

describe('LogController Decorator', () => {
  test('should call controller handle', async () => {
    const { controllerStub, sut } = makeSut()
    const handle = jest.spyOn(controllerStub, 'handle')

    const httpRequestuest = {
      body: {
        email: 'anyname@gmail.com',
        name: 'anyname',
        password: 'test123',
        passwordConfirmation: 'test123'
      }
    }
    await sut.handle(httpRequestuest)

    expect(handle).toHaveBeenCalledWith(httpRequestuest)
  })
  test('should return the same controller response', async () => {
    const { sut } = makeSut()

    const httpRequestuest = {
      body: {
        email: 'anyname@gmail.com',
        name: 'anyname',
        password: 'test123',
        passwordConfirmation: 'test123'
      }
    }
    const httpResponse = await sut.handle(httpRequestuest)
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        email: 'anyname@gmail.com',
        name: 'anyname'
      }
    })
  })
})
