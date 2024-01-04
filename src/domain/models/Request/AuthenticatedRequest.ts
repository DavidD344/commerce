import { type Request } from 'express'

export interface AuthenticatedRequest extends Request {
  user?: any // Defina o tipo correto para a propriedade 'user' conforme necessário
}
