import { isEmpty } from '@/application/helper'
import { DBCreateUserHandler, DBFindUserByEmailHandler } from '@/application/repositories/user'
import { GenerateAuthorizationHandler } from '@/application/security/authentication'
import { HashCryptHandler } from '@/application/security/crypto'
import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type UserToken } from '@/domain/models/User'
import { type ApiDefaultDTO } from '@/domain/presentation/response/dtos/default'
import { type RegisterUser } from '@/domain/useCases/user'
import { ApiError } from '@/presentation/errors'
import { StatusCodes } from 'http-status-codes'

export class RegisterUserHandler implements RegisterUser {
  private constructor () {}
  static build (): RegisterUserHandler {
    return new RegisterUserHandler()
  }

  async register (data: RegisterUserDTO): Promise<ApiDefaultDTO<UserToken>> {
    const verifyEmailUserExists = await DBFindUserByEmailHandler.build().find({ email: data.email })
    if (!isEmpty(verifyEmailUserExists)) {
      throw new ApiError({ message: 'Email already exists', statusCode: StatusCodes.PRECONDITION_FAILED })
    }
    const passwordHash: string = await HashCryptHandler.build().hash(data.password)
    const userCreated = await DBCreateUserHandler.build().create({ ...data, password: passwordHash })
    const token = GenerateAuthorizationHandler.build().generate({ id: userCreated.id, role: userCreated.role })
    return { statusCode: StatusCodes.CREATED, data: token, success: true }
  }
}

// verifica se as entradas tao dboa
// verifica se o email ja existe
// criptografar senha
// Cria no bd
// envia jwt
