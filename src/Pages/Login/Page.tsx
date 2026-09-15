import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../../services/auth.service'
import { useApiError } from '../../Hooks/useApiError'
import { useToast } from '../../Hooks/useToast'
import { useAuth } from '../../contexts/AuthContext'
import loginImage from '../../assets/ic_log.png'
import styles from './Styles.module.css'

export function LoginPage() {
  const [logUsu, setLogUsu] = useState('')
  const [pasUsu, setPasUsu] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast, showToast, clearToast } = useToast()
  const { getMessage } = useApiError()
  const { setSession } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearToast()

    if (!logUsu.trim()) {
      showToast('Por favor ingresa tu usuario.', 'error')
      return
    }

    if (!pasUsu.trim()) {
      showToast('Por favor ingresa tu contraseña.', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      await login(logUsu.trim(), pasUsu)
      setSession(logUsu.trim())
      navigate('/dashboard/general', { replace: true })
    } catch (error) {
      showToast(getMessage(error), 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles['login-wrapper']}>
      <div>
        <div className={styles['login-wrapper-h1']}>
          <h1>Plataforma de Proyecciones de Admisión</h1>
        </div>

        <div className={styles['login-container']}>
          <div className={styles['login-split']}>
            <div className={styles['login-logo']}>
              <img
                alt="Logo del sistema de admisión"
                src={loginImage}
              />
            </div>

            <form className={styles['login-form']} onSubmit={handleSubmit}>
              <h2>Iniciar sesión</h2>

              <div className={styles['form-group']}>
                <label htmlFor="logUsu">Usuario</label>
                <input
                  autoComplete="username"
                  autoFocus
                  id="logUsu"
                  name="logUsu"
                  onChange={(event) => setLogUsu(event.target.value)}
                  placeholder="Ingrese su usuario"
                  required
                  type="text"
                  value={logUsu}
                />
              </div>

              <div className={styles['form-group']}>
                <label htmlFor="pasUsu">Contraseña</label>
                <input
                  autoComplete="current-password"
                  id="pasUsu"
                  name="pasUsu"
                  onChange={(event) => setPasUsu(event.target.value)}
                  placeholder="Ingrese su contraseña"
                  required
                  type="password"
                  value={pasUsu}
                />
              </div>

              <button className={styles.btnLogin} disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Ingresando...' : 'Acceder'}
              </button>

              {toast && (
                <div className={`${styles.toast} ${styles[toast.type]}`} role="alert">
                  <span>{toast.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
