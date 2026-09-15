import { api } from './api'
import type { LoginRequest, LoginResponse } from '../types/login'

export const login = async (
  logUsu: string,
  pasUsu: string,
): Promise<LoginResponse> => {
  const credentials: LoginRequest = { logUsu, pasUsu }
  const { data } = await api.post<LoginResponse>('/usuario/login', credentials)

  return data
}
