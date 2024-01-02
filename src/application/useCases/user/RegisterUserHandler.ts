import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'
import { sign } from 'jsonwebtoken'

export class RegisterUserHandler {
  private constructor () {}

  static build (): RegisterUserHandler {
    return new RegisterUserHandler()
  }

  async register (data: RegisterUserDTO): Promise<UserAuthentication> {
    try {
      if (data.email === 'david' && data.password === '123') {
        const id = 1 // esse id viria do banco de dados
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
