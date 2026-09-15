import { AppRouter } from './router'
import { LoginPage } from './Pages/Login/Page'
import { AuthProvider } from './contexts/AuthContext'
import { ToastProvider } from './contexts/ToastContext'

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppRouter>
          <LoginPage />
        </AppRouter>
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
