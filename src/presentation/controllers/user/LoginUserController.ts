import { LoginUserHandler } from '@/application/useCases/user/LoginUserHandler'
import { type UserAuthentication } from '@/domain/models/User'
import { type Response, type Request } from 'express'

export class LoginUserController {
  private readonly loginUserHandler = LoginUserHandler.build()
  async handler (req: Request, res: Response): Promise<Response> {
    // res.send('De dentro do controller')
    const data = { email: 'a@gmail.com', password: '123' }
    const token: UserAuthentication = await this.loginUserHandler.login(data)
    return res.send(`De dentro do controller ${token.jwt}`)
  }
}
