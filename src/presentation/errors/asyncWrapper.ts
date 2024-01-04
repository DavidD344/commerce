import { type Request, type Response, type NextFunction } from 'express'

export const asyncWrapper = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err) => { next(err) })
}