export class ApiError extends Error {
  statusCode: number
  rawErrors?: any
  constructor (data: { statusCode: number, message: string, rawErrors?: any }) {
    super(data.message)
    this.statusCode = data.statusCode
    this.rawErrors = data.rawErrors
    Error.captureStackTrace(this, this.constructor)
  }
}
