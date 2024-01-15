import { type Request, type NextFunction, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ApiError } from '../errors'
import { isEmpty } from '@/application/helper'
import { VerifyAuthorizationHandler } from '@/application/security/authentication'
import { type UserAuthentication } from '@/domain/models/User'

export async function ensureAuthentication (req: Request, res: Response, next: NextFunction): Promise<void> {
  const token = req.headers.authorization
  if (isEmpty(token) || token === undefined || token.trim() === '') {
    throw new ApiError({ statusCode: StatusCodes.UNAUTHORIZED, message: 'Invalid header authorization token' })
  }
  try { // Apenas para padronizar o erro
    const tokenString: string = token
    const user: UserAuthentication = VerifyAuthorizationHandler.build().verify(tokenString)
    req.user = user

    next()
  } catch (error) {
    throw new ApiError({ statusCode: StatusCodes.FORBIDDEN, message: 'Invalid authorization token' })
  }
}
