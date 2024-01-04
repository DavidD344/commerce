export class ApiError extends Error {
  statusCode: number
  rawErrors?: any
  constructor (statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}
