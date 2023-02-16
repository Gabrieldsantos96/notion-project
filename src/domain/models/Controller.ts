import { httpRequest, httpResponse } from '@presentation/models'

export interface Controller {
  handle(httpRequest: httpRequest): Promise<httpResponse>
}
