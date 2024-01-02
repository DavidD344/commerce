import { type NextFunction, type Request, type Response } from 'express'
import { verify } from 'jsonwebtoken'
export interface IPayload {
  id: string
}

interface RequestWithUser extends Request {
  user?: any // Defina o tipo correto para a propriedade 'user' conforme necessário
}

export async function ensureAuthentication (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> {
  const token: string | undefined = req.headers.authorization
  if (token === null || token === undefined || token.trim() === '') {
    res.send('nao passou pai')
    // throw new Error('Invalid header bearer authorization token')
    return
  }
  const tokenString: string = token
  console.log('recebdi', tokenString)

  try {
    const teste = verify(tokenString, process.env.JWT_SECRET as string)
    console.log('resutado', token, teste)
    req.user = {
      id: teste
    }
    console.log(req.user)
    next()
  } catch (err) {
    console.log(err)
    // throw new Error('Invalid access_token')
    res.send('nao passou pai2')
  }
}
