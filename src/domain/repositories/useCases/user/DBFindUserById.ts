import { type LoadedUser } from '@/domain/models/User'
import { type DBFindUserByIdDTO } from '../../dtos/user'

export interface DBFindUserById {

  find: (data: DBFindUserByIdDTO) => Promise<LoadedUser | null>
}
