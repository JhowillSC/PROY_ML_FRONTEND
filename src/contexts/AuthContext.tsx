import { createContext, useContext, useState, type ReactNode } from 'react'

interface AuthContextValue {
  isAuthenticated: boolean
  username: string | null
  setSession: (username: string) => void
  logout: () => void
}

const storedUsername = localStorage.getItem('usuario')

const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: Boolean(storedUsername),
  username: storedUsername,
  setSession: () => undefined,
  logout: () => undefined,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(storedUsername)

  const setSession = (user: string) => {
    localStorage.setItem('usuario', user)
    setUsername(user)
  }

  const logout = () => {
    localStorage.removeItem('usuario')
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
