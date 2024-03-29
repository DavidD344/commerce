import { type NextFunction, type Request, type Response } from 'express'
import { type ApiError } from './ApiError'

export default class errorMiddleware {
  static handle = () => {
    return (err: ApiError, req: Request, res: Response, next: NextFunction) => {
      const statusCode = (typeof err.statusCode === 'number' && err.statusCode !== 0) ? err.statusCode : 500
      res.status(statusCode).send({
        success: false,
        message: err.message,
        rawErrors: err.rawErrors ?? []
      })
    }
  }
}
