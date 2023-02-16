import { httpResponse } from '@presentation/models/http'
import { ServerError } from '@presentation/errors'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function success(data: any): httpResponse {
  return {
    statusCode: 200,
    body: data
  }
}

export function badRequest(error: Error): httpResponse {
  return {
    statusCode: 400,
    body: error
  }
}

export function serverError(): httpResponse {
  return {
    statusCode: 500,
    body: new ServerError()
  }
}
