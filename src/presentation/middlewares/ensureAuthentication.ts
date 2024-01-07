import { type AuthenticatedRequest } from '@/domain/models/Request'
import { type NextFunction, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ApiError } from '../errors'
import { isEmpty } from '@/application/helper'
import { VerifyAuthorizationHandler } from '@/application/security/authentication'
export interface IPayload {
  id: string
}

export async function ensureAuthentication (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  const token: string | undefined = req.headers.authorization
  if (isEmpty(token) || token === undefined || token.trim() === '') {
    throw new ApiError({ statusCode: StatusCodes.UNAUTHORIZED, message: 'Invalid header authorization token' })
  }
  const tokenString: string = token

  const id = VerifyAuthorizationHandler.build().verify(tokenString)
  req.user = {
    id
  }
  console.log(req.user)
  next()
}
