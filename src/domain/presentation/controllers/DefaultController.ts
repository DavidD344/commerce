import { RegisterUserHandler } from '@/application/useCases/user'
import { type RegisterUserDTO } from '@/domain/dtos/user'
import { ApiDefaultHandler } from '@/presentation/response/ApiDefaultHandler'
import { type Response, type Request } from 'express'

export interface DefaultController {

  handler: (req: Request, res: Response) => Promise<void>

}

export class RegisterUserController {
  private readonly registerUserHandler = RegisterUserHandler.build()
  async handler (req: Request, res: Response): Promise<void> {
    const reqValid: RegisterUserDTO = req.body
    const response = await this.registerUserHandler.register(reqValid)
    ApiDefaultHandler.build().sendResponse({ res, body: response })
  }
}
