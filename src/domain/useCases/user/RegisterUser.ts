import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type UserToken } from '@/domain/models/User'
import { type ApiDefaultDTO } from '@/domain/presentation/response/dtos/default'

export interface RegisterUser {
  register: (data: RegisterUserDTO) => Promise<ApiDefaultDTO<UserToken>>
}
