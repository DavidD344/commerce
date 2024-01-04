import { type UserAuthentication } from '@/domain/models/User'

export interface GenerateAuthorization {
  generate: (id: string) => UserAuthentication
}
