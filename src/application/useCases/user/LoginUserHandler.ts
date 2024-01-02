import { type LoginUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'
import { type LoginUser } from '@/domain/useCases/user'
import { sign } from 'jsonwebtoken'

export class LoginUserHandler implements LoginUser {
  private constructor () {}
  static build (): LoginUserHandler {
    return new LoginUserHandler()
  }

  async login (data: LoginUserDTO): Promise<UserAuthentication> {
    try {
      if (data.email === 'david' && data.password === '123') {
        const id = data.email // esse id viria do banco de dados
        const token = sign({ id }, process.env.JWT_SECRET as string, {
          expiresIn: 300 // expires in 5min
        }
        )
        return { jwt: token }
      } else {
        throw new Error('Erro ao processar o login')
      }
    } catch (error) {
      console.log(error)
      return { jwt: undefined }
    }
  }
}
