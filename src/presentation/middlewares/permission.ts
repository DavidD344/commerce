import PrismaInstance from '@/infra/repositories/PrismaInstance'
import { type Role } from '@prisma/client'
import { type NextFunction, type Request, type Response } from 'express'

export function is (roles: Role[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const {
      user: { id: userId }
    } = request

    const user = await PrismaInstance.user.findFirst({
      where: {
        id: userId
      }
    })
    if (user === null) {
      return
    }
    const permissionExists = roles.includes(user.role)

    if (!permissionExists) {
      return response.status(401).json({
        message: 'There is no permission'
      })
    }

    next()
  }
}
