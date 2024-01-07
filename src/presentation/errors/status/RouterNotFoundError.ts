import { StatusCodes } from 'http-status-codes'
import { ApiError } from '../ApiError'

export class RouterNotFoundError extends ApiError {
  constructor (path: string) {
    super({ statusCode: StatusCodes.NOT_FOUND, message: `The requested path ${path} not found!` })
  }
}
