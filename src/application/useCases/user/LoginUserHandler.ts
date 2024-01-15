import { DBFindUserByEmailWithPasswordHandler } from '@/application/repositories/user'
import { GenerateAuthorizationHandler } from '@/application/security/authentication'
import { HashComparerHandler } from '@/application/security/crypto'
import { type LoginUserDTO } from '@/domain/dtos/user'
import { type UserToken, type User } from '@/domain/models/User'
import { type ApiDefaultDTO } from '@/domain/presentation/response/dtos/default'
import { type LoginUser } from '@/domain/useCases/user'
import { ApiError } from '@/presentation/errors'
import { StatusCodes } from 'http-status-codes'

export class LoginUserHandler implements LoginUser {
  private constructor () {}
  static build (): LoginUserHandler {
    return new LoginUserHandler()
  }

  async login (data: LoginUserDTO): Promise<ApiDefaultDTO<UserToken>> {
    const verifyEmailUserExists: User | null = await DBFindUserByEmailWithPasswordHandler.build().find({ email: data.email })

    if (verifyEmailUserExists === null) {
      throw new ApiError({ message: 'Invalid email and/or password', statusCode: StatusCodes.PRECONDITION_FAILED })
    }

    const passwordIsCorrect: boolean = await HashComparerHandler.build().compare(data.password, verifyEmailUserExists.password)
    if (!passwordIsCorrect) {
      throw new ApiError({ message: 'Invalid email and/or password', statusCode: StatusCodes.PRECONDITION_FAILED })
    }

    const token = GenerateAuthorizationHandler.build().generate({ id: verifyEmailUserExists.id, role: verifyEmailUserExists.role })

    return { data: token, statusCode: StatusCodes.ACCEPTED, success: true }
  }
}
