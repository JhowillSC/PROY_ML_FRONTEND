import { useState, type FormEvent } from 'react'

import { login } from '../../services/auth.service'
import { useApiError } from '../../Hooks/useApiError'
import { useToast } from '../../Hooks/useToast'
import styles from './Styles.module.css'

export function LoginPage() {
  const [logUsu, setLogUsu] = useState('')
  const [pasUsu, setPasUsu] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast, showToast, clearToast } = useToast()
  const { getMessage } = useApiError()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearToast()
    setIsSubmitting(true)

    try {
      const response = await login(logUsu, pasUsu)
      showToast(response.mensaje, 'success')
    } catch (error) {
      showToast(getMessage(error), 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Login</h1>

        <label className={styles.field}>
          Usuario
          <input
            autoComplete="username"
            name="logUsu"
            onChange={(event) => setLogUsu(event.target.value)}
            required
            type="text"
            value={logUsu}
          />
        </label>

        <label className={styles.field}>
          Contraseña
          <input
            autoComplete="current-password"
            name="pasUsu"
            onChange={(event) => setPasUsu(event.target.value)}
            required
            type="password"
            value={pasUsu}
          />
        </label>

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Enviando...' : 'Ingresar'}
        </button>

        {toast && (
          <div className={`${styles.toast} ${styles[toast.type]}`} role="alert">
            {toast.message}
            <button aria-label="Cerrar mensaje" onClick={clearToast} type="button">
              Cerrar
            </button>
          </div>
        )}
      </form>
    </main>
  )
}
