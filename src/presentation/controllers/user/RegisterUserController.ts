import { RegisterUserHandler } from '@/application/useCases/user'
import { type UserAuthentication } from '@/domain/models/User'
import { type Response, type Request } from 'express'

export class RegisterUserController {
  private readonly registerUserHandler = RegisterUserHandler.build()
  async handler (req: Request, res: Response): Promise<Response> {
    // res.send('De dentro do controller')
    try {
      const data = { email: 'david', password: '123', name: '' }
      const token: UserAuthentication = await this.registerUserHandler.register(data)
      console.log(token)
      return res.send(`De dentro do controller ${token.jwt}`)
    } catch (erro) {
      return res.send(erro)
    }
  }
}
