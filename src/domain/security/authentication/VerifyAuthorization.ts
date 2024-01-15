import { type UserAuthentication } from '@/domain/models/User'

export interface VerifyAuthorization {
  verify: (token: string) => UserAuthentication
}
