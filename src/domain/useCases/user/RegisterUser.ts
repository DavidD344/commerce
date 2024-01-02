import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type LoadedUser } from '@/domain/models/User'

export interface RegisterUser {
  register: (data: RegisterUserDTO) => Promise<LoadedUser>
}
