import { type Response } from 'express'

export interface ApiDefaultDTO<T> {
  success: boolean
  statusCode: number
  data: T
}

export interface ApiDefaultWithResponseDTO {
  res: Response
  body: {
    success: boolean

    statusCode: number
    data: any
  }
}
