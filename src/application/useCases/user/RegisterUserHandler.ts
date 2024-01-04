import { GenerateAuthorizationHandler } from '@/application/security/authentication/GenerateAuthorizationHandler'
import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication, type LoadedUser } from '@/domain/models/User'
import { type RegisterUser } from '@/domain/useCases/user'

export class RegisterUserHandler implements RegisterUser {
  generateAuthorizationHandler: GenerateAuthorizationHandler = GenerateAuthorizationHandler.build()
  private constructor () {}
  static build (): RegisterUserHandler {
    return new RegisterUserHandler()
  }

  async register (data: RegisterUserDTO): Promise<UserAuthentication> {
    const userBD: LoadedUser = {
      id: '1',
      name: 'Usuário Exemplo',
      email: 'exemplo@email.com',
      createdAt: new Date('2023-01-01'),
      updatedAt: new Date('2023-01-02')
    }
    try {
      const token = this.generateAuthorizationHandler.generate(userBD.id)
      return token
    } catch (error) {
      console.log(error)
      return { jwt: undefined }
    }
  }
}
