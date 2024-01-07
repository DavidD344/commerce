import { type RegisterUserDTO } from '@/domain/dtos/user'
import { type UserAuthentication } from '@/domain/models/User'
import { type ApiDefaultDTO } from '@/domain/presentation/response/dtos/default'

export interface RegisterUser {
  register: (data: RegisterUserDTO) => Promise<ApiDefaultDTO<UserAuthentication>>
}
