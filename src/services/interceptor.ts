import type { AxiosInstance } from 'axios'

export const configureInterceptors = (client: AxiosInstance): AxiosInstance => {
  client.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  )

  return client
}
