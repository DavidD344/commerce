import { LoginUserController } from '@/presentation/controllers/user/RegisterUserController'
import { type Request, type Response, Router, type RequestHandler } from 'express'

const loginUserController = new LoginUserController()

const accountRoutes = Router()

accountRoutes.get('/create', ({ res }) => { res?.send('create') })
accountRoutes.get('/delete', ({ res }) => { res?.send('delete') })

accountRoutes.get('/login', (async (req: Request, res: Response) => {
  console.log('passei')
  await loginUserController.handler(req, res)
}) as RequestHandler
)

export default accountRoutes

// const deleteAccount = (req: Request, res: Response): void => {
//   try {
//     // Aqui você pode adicionar a lógica para exclusão da conta
//     console.log('Requisição:', req)
//     console.log('Resposta:', res)

//     res.status(200).json({ message: 'Conta excluída com sucesso.' })
//   } catch (err) {
//     res.status(500).json({ message: 'Erro ao processar a exclusão da conta.', error: err })
//   }
// }
