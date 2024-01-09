import { LoginUserHandler } from '@/application/useCases/user'
import { type LoginUserDTO } from '@/domain/dtos/user'
import { type DefaultController } from '@/domain/presentation/controllers'
import { ApiDefaultHandler } from '@/presentation/response'
import { type Response, type Request } from 'express'

export class LoginUserController implements DefaultController {
  private readonly loginUserHandler = LoginUserHandler.build()
  async handler (req: Request, res: Response): Promise<void> {
    const reqValid: LoginUserDTO = req.body
    const response = await this.loginUserHandler.login(reqValid)
    ApiDefaultHandler.build().sendResponse({ res, body: response })
  }
}
