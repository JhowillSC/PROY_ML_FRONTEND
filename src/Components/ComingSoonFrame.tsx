import styles from './ComingSoonFrame.module.css'

interface ComingSoonFrameProps {
  title: string
  subtitle: string
}

export function ComingSoonFrame({ title, subtitle }: ComingSoonFrameProps) {
  return (
    <section className={styles.content}>
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
      </header>

      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <svg
            className={styles.icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Crane / construction hook */}
            <path d="M2 20h20" />
            <path d="M17 4h-2l-3 8" />
            <path d="M17 4V2" />
            <path d="M6 20V10" />
            <path d="M6 10l6-6 5 5" />
            <rect x="3" y="14" width="6" height="6" rx="1" />
            <path d="M17 4l3 3-7 5" />
          </svg>
        </div>

        <div className={styles.badge}>En desarrollo</div>

        <h2 className={styles.heading}>Módulo en implementación</h2>

        <p className={styles.description}>
          Este módulo se encuentra actualmente en proceso de desarrollo y estará
          disponible próximamente. Nuestro equipo está trabajando para brindarte
          la mejor experiencia analítica.
        </p>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} />
        </div>
        <span className={styles.progressLabel}>Implementación en progreso…</span>
      </div>
    </section>
  )
}
