import { type User } from '@/domain/models/User'
import { type DBFindUserByEmailDTO } from '@/domain/repositories/dtos/user'
import { type DBFindUserByEmailWithPassword } from '@/domain/repositories/useCases/user'
import PrismaInstance from '@/infra/repositories/PrismaInstance'

export class DBFindUserByEmailWithPasswordHandler implements DBFindUserByEmailWithPassword {
  private constructor () {}
  static build (): DBFindUserByEmailWithPasswordHandler {
    return new DBFindUserByEmailWithPasswordHandler()
  }

  async find (data: DBFindUserByEmailDTO): Promise<User | null> {
    try {
      return await PrismaInstance.user.findUnique({
        where: {
          email: data.email
        }
      })
    } catch (error) {
      throw new Error('Error find user in database')
    }
  }
}
