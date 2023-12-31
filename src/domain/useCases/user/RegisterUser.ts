import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'

export interface RegisterUser {
  create: (data: RegisterUserDTO) => Promise<UserAuthentication>
}
