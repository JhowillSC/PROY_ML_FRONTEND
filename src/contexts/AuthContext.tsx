import { createContext, useContext, type ReactNode } from 'react'

interface AuthContextValue {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextValue>({ isAuthenticated: false })

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={{ isAuthenticated: false }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
