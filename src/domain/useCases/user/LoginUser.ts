import { type LoginUserDTO } from '@/domain/dtos/user'
import { type UserToken } from '@/domain/models/User'
import { type ApiDefaultDTO } from '@/domain/presentation/response/dtos/default'

export interface LoginUser {
  login: (data: LoginUserDTO) => Promise<ApiDefaultDTO<UserToken>>
}
