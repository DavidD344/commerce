import { type LoginUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'

export interface LoginUser {
  login: (data: LoginUserDTO) => Promise<UserAuthentication>
}
