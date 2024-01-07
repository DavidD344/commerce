import { type UserAuthentication } from '@/domain/models/User'
import { type GenerateAuthorization } from '@/domain/security/authentication'
import { sign } from 'jsonwebtoken'

export class GenerateAuthorizationHandler implements GenerateAuthorization {
  private constructor () {}

  static build (): GenerateAuthorizationHandler {
    return new GenerateAuthorizationHandler()
  }

  generate (id: string): UserAuthentication {
    try {
      const token = sign({ id }, process.env.JWT_SECRET as string, {
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
