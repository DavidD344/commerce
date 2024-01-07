import { type VerifyAuthorization } from '@/domain/security/authentication'
import { verify } from 'jsonwebtoken'

export class VerifyAuthorizationHandler implements VerifyAuthorization {
  private constructor () { }

  static build (): VerifyAuthorizationHandler {
    return new VerifyAuthorizationHandler()
  }

  verify (token: string): string {
    try {
      return verify(token, process.env.JWT_SECRET as string) as string
    } catch (error) {
      console.log(error)
      throw new Error('JWT not valid')
    }
  }
}
