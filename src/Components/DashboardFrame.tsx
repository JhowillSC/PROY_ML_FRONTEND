import { useEffect, useRef, useState } from 'react'
import { Loader2, Maximize2, Minimize2, RefreshCw } from 'lucide-react'

import styles from './DashboardFrame.module.css'

interface DashboardFrameProps {
  title: string
  subtitle: string
  src: string
}

export function DashboardFrame({ title, subtitle, src }: DashboardFrameProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    setIsLoading(true)
    setIsVisible(false)

    const timer = window.setTimeout(() => setIsVisible(true), 80)
    return () => window.clearTimeout(timer)
  }, [src, refreshKey])

  const handleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen()
      return
    }

    void iframeRef.current?.requestFullscreen?.()
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === iframeRef.current)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  return (
    <section
      className={`${styles.content} ${isVisible ? styles.visible : ''}`}
    >
      <header className={styles.header}>
        <div>
          <p>Portal Analítico</p>
          <h1>{title}</h1>
          <span>{subtitle}</span>
          <div className={styles.indicator}>
            <i />
            <i />
            <i />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            className={styles.refreshButton}
            onClick={() => setRefreshKey((current) => current + 1)}
            title="Recargar reporte"
            type="button"
          >
            <RefreshCw size={13} />
            Recargar
          </button>
          <button
            className={styles.fullscreenButton}
            onClick={handleFullscreen}
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            type="button"
          >
            {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            {isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          </button>
        </div>
      </header>

      <div className={styles.frameWrapper}>
        {isLoading && (
          <div className={styles.loadingOverlay}>
            <div className={styles.loadingIcon}>
              <Loader2 className={styles.spinner} size={28} />
            </div>
            <strong>Cargando dashboard...</strong>
            <span>Conectando con Power BI</span>
          </div>
        )}

        <iframe
          key={refreshKey}
          className={styles.frame}
          ref={iframeRef}
          title={title}
          src={src}
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </section>
  )
}
