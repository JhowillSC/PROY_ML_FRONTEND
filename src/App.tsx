import { AppRouter } from './router'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from './Pages/Login/Page'
import { DashboardGeneralPage } from './Pages/DashboardGeneral/Page'
import { DashboardColegiosPage } from './Pages/DashboardColegios/Page'
import { DashboardComparativoPage } from './Pages/DashboardComparativo/Page'
import { DashboardPredictivoFacultadesPage } from './Pages/DashboardPredictivoFacultades/Page'
import { DashboardLayout } from './Components/DashboardLayout'
import { AuthProvider } from './contexts/AuthContext'
import { ToastProvider } from './contexts/ToastContext'
import { useAuth } from './contexts/AuthContext'

function AppContent() {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <AppRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate replace to="/dashboard/general" /> : <LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={isAuthenticated ? <DashboardLayout /> : <Navigate replace to="/" />}>
            <Route path="/dashboard/general" element={<DashboardGeneralPage />} />
            <Route path="/dashboard/colegios" element={<DashboardColegiosPage />} />
            <Route path="/dashboard/comparativo" element={<DashboardComparativoPage />} />
            <Route path="/dashboard/predictivo-facultades" element={<DashboardPredictivoFacultadesPage />} />
          </Route>
          <Route path="*" element={<Navigate replace to={isAuthenticated ? '/dashboard/general' : '/'} />} />
        </Routes>
      </AppRouter>
    </BrowserRouter>
  )
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </AuthProvider>
  )
}

export default App
