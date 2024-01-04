import { type LoadedUser } from '@/domain/models/User'
import { type DBCreateUserDTO } from '../../dtos/user'

export interface DBCreateUser {
  create: (data: DBCreateUserDTO) => Promise<LoadedUser>
}
