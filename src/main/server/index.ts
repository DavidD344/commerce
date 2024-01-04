import 'module-alias/register'
import express, { type NextFunction, type Request, type Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import routers from '@/presentation/routes'
import { ApiError, asyncWrapper, setupUncaughtExceptionHandler, setupUnhandledRejectionHandler } from '@/presentation/errors'
import { RouterNotFoundError } from '@/presentation/errors/status'
import { StatusCodes } from 'http-status-codes'
import errorMiddleware from '@/presentation/errors/errorMiddleware'

const port = process.env.PORT ?? 5000
const app = express()
app.use(express.json())
app.use(cors())

app.use(routers)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/teste1', (req, res, next) => {
  res.send('teste1')
})

app.get('/teste2', (req, res, next) => {
  try {
    // throw new ApiError(404, 'teste2 deu erro')
    const errors = new ApiError(404, 'teste2 deu erro')
    throw errors
  } catch (error) {
    next(error)
  }
})

app.get('/teste3', asyncWrapper((req: Request, res: Response, next: NextFunction) => {
  throw new ApiError(StatusCodes.UNAUTHORIZED, 'You are not authorized to access this!')
}))

app.use('*', (req: Request, res: Response, next: NextFunction) => { next(new RouterNotFoundError(req.path)) })

app.use(errorMiddleware.handle())
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

setupUncaughtExceptionHandler()
setupUnhandledRejectionHandler()
