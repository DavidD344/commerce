import { LoadedUserForPrisma, type LoadedUser } from '@/domain/models/User'
import { type DBFindUserByEmailDTO } from '@/domain/repositories/dtos/user'
import { type DBFindUserByEmail } from '@/domain/repositories/useCases/user'
import PrismaInstance from '@/infra/repositories/PrismaInstance'

export class DBFindUserByEmailHandler implements DBFindUserByEmail {
  private constructor () {}
  static build (): DBFindUserByEmailHandler {
    return new DBFindUserByEmailHandler()
  }

  async find (data: DBFindUserByEmailDTO): Promise<LoadedUser | null> {
    try {
      return await PrismaInstance.user.findUnique({
        where: {
          email: data.email
        },
        select: LoadedUserForPrisma
      })
    } catch (error) {
      throw new Error('Error find user in database')
    }
  }
}
