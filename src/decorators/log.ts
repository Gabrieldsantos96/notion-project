import { Controller } from '@domain/models/Controller'
import { httpRequest, httpResponse } from '@presentation/models'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor(controller: Controller) {
    this.controller = controller
  }

  async handle(httpReq: httpRequest): Promise<httpResponse> {
    const httpResponse = await this.controller.handle(httpReq)

    if (httpResponse.statusCode === 500) {
      //
    }
    return httpResponse
  }
}
