import { LoadedUserForPrisma, type LoadedUser } from '@/domain/models/User'
import { type DBFindUserByIdDTO } from '@/domain/repositories/dtos/user'
import { type DBFindUserById } from '@/domain/repositories/useCases/user'
import PrismaInstance from '@/infra/repositories/PrismaInstance'

export class DBFindUserByIdHandler implements DBFindUserById {
  private constructor () {}
  static build (): DBFindUserByIdHandler {
    return new DBFindUserByIdHandler()
  }

  async find (data: DBFindUserByIdDTO): Promise<LoadedUser | null> {
    try {
      return await PrismaInstance.user.findUnique({
        where: {
          id: data.id
        },
        select: LoadedUserForPrisma
      })
    } catch (error) {
      throw new Error('Error creating user in database')
    }
  }
}
