import { type Request, type Response, type NextFunction } from 'express'

export const asyncWrapper = (fn: any) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch((err) => { next(err) })
  // Tenta resolver a Promise caso aconteça qualquer erro antes de concluir passa o error para o midleware de tratamento de erros
  // devo encapsular usando isso para nao precisar sempre que disparar um error colocar o next(error) alem de eveitar muitos trycatch
}
// Capturar erros de funções assincronas
