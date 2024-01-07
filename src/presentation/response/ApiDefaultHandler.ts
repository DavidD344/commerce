import { type ApiDefaultWithResponseDTO } from '@/domain/presentation/response/dtos/default'
import { type ApiDefault } from '@/domain/presentation/response/useCases/default/ApiDefault'

export class ApiDefaultHandler implements ApiDefault {
  private constructor () {}

  static build (): ApiDefaultHandler {
    return new ApiDefaultHandler()
  }

  sendResponse (data: ApiDefaultWithResponseDTO): void {
    data.res.status(data.body.statusCode).json({ success: data.body.success, statusCode: data.body.statusCode, data: data.body.data })
  }
}
