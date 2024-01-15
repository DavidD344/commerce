import { type UserToken, type UserAuthentication } from '@/domain/models/User'
import { type GenerateAuthorization } from '@/domain/security/authentication'
import { sign } from 'jsonwebtoken'

export class GenerateAuthorizationHandler implements GenerateAuthorization {
  private constructor () {}

  static build (): GenerateAuthorizationHandler {
    return new GenerateAuthorizationHandler()
  }

  generate (data: UserAuthentication): UserToken {
    try {
      const token = sign(data, process.env.JWT_SECRET as string, {
        expiresIn: Number(process.env.JWT_EXPIRESIN as string)
        // expiresIn: 300 // expires in 5min

      }
      )
      return { jwt: token }
    } catch (error) {
      console.log(error)
      throw new Error('Error with generate authentication')
    }
  }
}
