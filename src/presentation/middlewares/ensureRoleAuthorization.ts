import { type Request, type NextFunction, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ApiError } from '../errors'
import { type Role } from '@prisma/client'
import { DBFindUserByIdHandler } from '@/application/repositories/user'

export function ensureRoleAuthorization (roles: Role[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      user: { id: userId }
    } = req
    const userByBD = await DBFindUserByIdHandler.build().find({ id: userId })

    if (userByBD === null) {
      throw new ApiError({ statusCode: StatusCodes.FORBIDDEN, message: 'There is no permission' })
    }
    const permissionExists = roles.includes(userByBD.role)

    if (!permissionExists) {
      throw new ApiError({ statusCode: StatusCodes.FORBIDDEN, message: 'There is no permission' })
    }
    next()
  }
}
