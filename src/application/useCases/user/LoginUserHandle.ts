import { type LoginUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'
import { type LoginUser } from '@/domain/useCases/user'

export class LoginUserHandler implements LoginUser {
  private constructor () {}
  static build (): LoginUserHandler {
    return new LoginUserHandler()
  }

  async login (data: LoginUserDTO): Promise<UserAuthentication> {
    const dataBD: LoginUserDTO = { email: 'a@gmail.com', password: '123' }
    if (data.email !== dataBD.email || data.password !== dataBD.password) {
      throw new Error('Login error')
    }
    return { jwt: 'jwt' }
  }
}
