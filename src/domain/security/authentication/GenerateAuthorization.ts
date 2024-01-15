import { type UserToken, type UserAuthentication } from '@/domain/models/User'

export interface GenerateAuthorization {
  generate: (data: UserAuthentication) => UserToken
}
