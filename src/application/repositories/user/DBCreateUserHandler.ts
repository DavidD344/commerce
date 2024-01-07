import { LoadedUserForPrisma, type LoadedUser } from '@/domain/models/User'
import { type DBCreateUserDTO } from '@/domain/repositories/dtos/user'
import { type DBCreateUser } from '@/domain/repositories/useCases/user'
import PrismaInstance from '@/infra/repositories/PrismaInstance'

export class DBCreateUserHandler implements DBCreateUser {
  private constructor () {}
  static build (): DBCreateUserHandler {
    return new DBCreateUserHandler()
  }

  async create (data: DBCreateUserDTO): Promise<LoadedUser> {
    try {
      return await PrismaInstance.user.create({
        select: LoadedUserForPrisma,
        data
      })
    } catch (error) {
      throw new Error('Error creating user in database')
    }
  }
}
