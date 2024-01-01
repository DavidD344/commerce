import { LoginUserController } from '@/presentation/controllers/user/LoginUserController'
import { type Request, type Response, Router, type RequestHandler } from 'express'

const loginUserController = new LoginUserController()

const accountRoutes = Router()
accountRoutes.get('/register', (async (req: Request, res: Response) => {
  await loginUserController.handler(req, res)
}) as RequestHandler
)
accountRoutes.get('/login', (async (req: Request, res: Response) => {
  await loginUserController.handler(req, res)
}) as RequestHandler
)

export default accountRoutes
