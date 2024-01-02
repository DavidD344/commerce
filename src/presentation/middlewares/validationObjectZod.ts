import { type Response, type NextFunction, type Request } from 'express'
import { type AnyZodObject } from 'zod'

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
      console.log('passei no erro')
      return res.status(400).json(error)
    }
  }
