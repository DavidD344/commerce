import { RegisterUserHandler } from '@/application/useCases/user'
import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type DefaultController } from '@/domain/presentation/controllers'
import { ApiDefaultHandler } from '@/presentation/response'
import { type Response, type Request } from 'express'

export class RegisterUserController implements DefaultController {
  private readonly registerUserHandler = RegisterUserHandler.build()
  async handler (req: Request, res: Response): Promise<void> {
    const reqValid: RegisterUserDTO = req.body
    const response = await this.registerUserHandler.register(reqValid)
    ApiDefaultHandler.build().sendResponse({ res, body: response })
  }
}
