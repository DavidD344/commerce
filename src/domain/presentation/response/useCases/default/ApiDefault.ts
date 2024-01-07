import { type ApiDefaultWithResponseDTO } from '../../dtos/default'

export interface ApiDefault {

  sendResponse: (data: ApiDefaultWithResponseDTO) => void
}
