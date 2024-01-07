import { type LoadedUser } from '@/domain/models/User'
import { type DBFindUserByEmailDTO } from '../../dtos/user'

export interface DBFindUserByEmail {

  find: (data: DBFindUserByEmailDTO) => Promise<LoadedUser | null>
}
