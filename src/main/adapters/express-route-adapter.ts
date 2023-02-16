import { Controller } from '@domain/models/Controller'
import { Response, Request } from 'express'
import { httpRequest, httpResponse } from '@presentation/models'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: httpRequest = {
      ...(req.params && { params: req.params }),
      ...(req.body && { body: req.body })
    }
    const httpResponse: httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
