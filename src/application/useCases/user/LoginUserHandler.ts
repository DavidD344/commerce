import { GenerateAuthorizationHandler } from '@/application/security/authentication/GenerateAuthorizationHandler'
import { type LoginUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'
import { type LoginUser } from '@/domain/useCases/user'

export class LoginUserHandler implements LoginUser {
  generateAuthorizationHandler: GenerateAuthorizationHandler = GenerateAuthorizationHandler.build()
  private constructor () {}
  static build (): LoginUserHandler {
    return new LoginUserHandler()
  }

  async login (data: LoginUserDTO): Promise<UserAuthentication> {
    try {
      if (data.email === 'david' && data.password === '123') {
        const token = this.generateAuthorizationHandler.generate(data.email)
        return token
      } else {
        throw new Error('Error with authentication')
      }
    } catch (error) {
      console.log(error)
      return { jwt: undefined }
    }
  }
}
