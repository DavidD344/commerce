import { type Response, type NextFunction, type Request } from 'express'
import { ZodError, type AnyZodObject } from 'zod'
import { ApiError } from '../errors'
import { StatusCodes } from 'http-status-codes'

export const validationObjectZod = (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body)
      console.log(req.headers.authorization)
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params
      })
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        const messages = error.issues.map(issue => issue.message)

        throw new ApiError({ message: 'Validation error', statusCode: StatusCodes.BAD_REQUEST, rawErrors: [messages] })
      }
      throw new ApiError({ message: 'Validation error', statusCode: StatusCodes.BAD_REQUEST, rawErrors: [error] })
    }
  }
