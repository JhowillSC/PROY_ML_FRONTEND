import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextValue {
  isAuthenticated: boolean
  username: string | null
  setSession: (username: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  username: null,
  setSession: () => undefined,
  logout: () => undefined,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null)

  const setSession = (user: string) => {
    setUsername(user)
  }

  const logout = () => {
    setUsername(null)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: Boolean(username),
        username,
        setSession,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
