// import { Request, Response } from 'express'
/* eslint-disable @typescript-eslint/no-explicit-any */
export type httpResponse = {
  statusCode: number
  body?: any
}

export type httpRequest = {
  file?: any
  files?: any
  params?: {
    [key: string]: string
  }
  query?: {
    [key: string]: string
  }
  body?: any
}
