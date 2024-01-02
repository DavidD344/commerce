import { HelloUserValidDTO } from '@/application/dtos/user'
import { LoginUserController } from '@/presentation/controllers/user/LoginUserController'
import { RegisterUserController } from '@/presentation/controllers/user/RegisterUserController'
import { ensureAuthentication, validationObjectZod } from '@/presentation/middlewares'
import { type Request, type Response, Router } from 'express'

const loginUserController = new LoginUserController()
const registerUserController = new RegisterUserController()

const accountRoutes = Router()
accountRoutes.get('/register', [async (req: Request, res: Response): Promise<void> => {
  await registerUserController.handler(req, res)
}]
)
accountRoutes.get('/login', [async (req: Request, res: Response): Promise<void> => {
  await loginUserController.handler(req, res)
}]
)
accountRoutes.get('/hello', [ensureAuthentication, validationObjectZod(HelloUserValidDTO), async (req: Request, res: Response): Promise<void> => {
  res.send('hello worls')
}]
)
// ensureAuthentication

export default accountRoutes
// Primeiro middleware
// const primeiroMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   console.log('Primeiro middleware')
//   // Faça alguma operação aqui, se necessário
//   next() // Chama o próximo middleware na pilha
//   // res.send('Primeiro middleware')
// }
