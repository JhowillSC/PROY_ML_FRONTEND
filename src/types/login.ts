export interface LoginRequest {
  logUsu: string
  pasUsu: string
}

export interface LoginResponse {
  mensaje: string
  rol: string
}
