import axios from 'axios'

import { errorMessages } from '../shared/constants/errorMessages'
import type { ApiErrorResponse } from '../types/general'

export const useApiError = () => {
  const getMessage = (error: unknown): string => {
    if (axios.isAxiosError<ApiErrorResponse>(error)) {
      const responseData: unknown = error.response?.data

      if (!error.response) {
        return 'No se pudo conectar con el servidor.'
      }

      if (typeof responseData === 'string' && responseData.trim()) {
        return responseData
      }

      if (responseData && typeof responseData === 'object') {
        const apiError = responseData as ApiErrorResponse

        if (apiError.mensaje || apiError.message || apiError.error) {
          return apiError.mensaje ?? apiError.message ?? apiError.error ?? errorMessages.generic
        }
      }
    }

    return errorMessages.generic
  }

  return { getMessage }
}
