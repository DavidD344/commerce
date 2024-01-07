import { LoginUserHandler } from '@/application/useCases/user'
import { type Response, type Request } from 'express'

export class LoginUserController {
  private readonly loginUserHandler = LoginUserHandler.build()
  async handler (req: Request, res: Response): Promise<void> {
    const data = { email: 'a@gmail.com', password: '123' }
    await this.loginUserHandler.login(data)
  }
}
