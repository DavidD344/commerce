/* eslint-disable @typescript-eslint/no-misused-promises */
import { HelloUserValidDTO, LoginUserValidDTO, RegisterUserValidDTO } from '@/application/dtos/user'
import { LoginUserController } from '@/presentation/controllers/user/LoginUserController'
import { RegisterUserController } from '@/presentation/controllers/user/RegisterUserController'
import { ensureAuthentication, validationObjectZod } from '@/presentation/middlewares'
import { type Request, type Response, Router } from 'express'
import { asyncWrapper } from '../errors'
import { ensureRoleAuthorization } from '../middlewares/ensureRoleAuthorization'

const loginUserController = new LoginUserController()
const registerUserController = new RegisterUserController()

const accountRoutes = Router()
accountRoutes.get('/register', [
  asyncWrapper(validationObjectZod(RegisterUserValidDTO)),
  asyncWrapper(async (req: Request, res: Response): Promise<void> => {
    await registerUserController.handler(req, res)
  })]
)
accountRoutes.get('/login', [
  asyncWrapper(validationObjectZod(LoginUserValidDTO)),
  asyncWrapper(async (req: Request, res: Response): Promise<void> => {
    await loginUserController.handler(req, res)
  })]
)
accountRoutes.get('/hello',
  asyncWrapper(ensureAuthentication),
  asyncWrapper(ensureRoleAuthorization(['ADMIN', 'USER'])),
  asyncWrapper(validationObjectZod(HelloUserValidDTO)), async (req: Request, res: Response): Promise<void> => {
    res.send('hello worls')
  }
)

export default accountRoutes
// await ensureRoleAuthorization(['ADMIN'])
