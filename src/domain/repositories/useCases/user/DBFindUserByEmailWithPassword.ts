import { type User } from '@/domain/models/User'
import { type DBFindUserByEmailWithPasswordDTO } from '../../dtos/user'

export interface DBFindUserByEmailWithPassword {

  find: (data: DBFindUserByEmailWithPasswordDTO) => Promise<User | null>
}
