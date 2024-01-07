import { type Request } from 'express'

export interface AuthenticatedRequest extends Request {
  user?: { id: string } // Defina o tipo correto para a propriedade 'user' conforme necessário
}
