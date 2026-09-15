import axios from 'axios'

import { env } from '../config/env'
import { configureInterceptors } from './interceptor'

const apiClient = axios.create({
  baseURL: env.apiUrl,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
})

export const api = configureInterceptors(apiClient)
