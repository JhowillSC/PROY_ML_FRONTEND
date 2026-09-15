import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
import { dashboardModules } from '../config/dashboardModules'
import styles from './DashboardLayout.module.css'

export function DashboardLayout() {
  const { username, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>PA</span>
          <div>
            <strong>Portal Analítico</strong>
            <small>Oficina de Admisión</small>
          </div>
        </div>

        <div className={styles.menuLabel}>Menú principal</div>
        <nav className={styles.navigation} aria-label="Módulos del dashboard">
          {dashboardModules.map((module) => (
            <NavLink
              className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
              key={module.path}
              to={module.path}
            >
              {module.shortTitle}
            </NavLink>
          ))}
        </nav>

        <div className={styles.userArea}>
          <div className={styles.userInfo}>
            <span className={styles.userAvatar}>{username?.charAt(0).toUpperCase() ?? 'U'}</span>
            <div>
              <strong>{username ?? 'Usuario'}</strong>
              <small>Usuario</small>
            </div>
          </div>
          <button className={styles.logout} onClick={handleLogout} type="button">
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.topbar}>
          <div className={styles.systemName}>
            <span />
            Sistema de Admisión Universitaria
          </div>
          <time dateTime={new Date().toISOString()}>
            {new Date().toLocaleDateString('es-PE', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>
        <div className={styles.pageContent}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
