export interface DashboardModule {
  path: string
  shortTitle: string
  title: string
  subtitle: string
  powerBiUrl?: string
  comingSoon?: boolean
}

export const dashboardModules: DashboardModule[] = [
  {
    path: '/dashboard/general',
    shortTitle: 'Panorama General',
    title: 'Panorama General',
    subtitle: 'Análisis de procedencia y distribución de postulantes del proceso de admisión (2023-I a 2027-I).',
    powerBiUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiMmM4NWRhZmMtZDE5OC00OGNlLTk4YWYtZjE1NjgzZjZkODRlIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9&navContentPaneEnabled=false&filterPaneEnabled=false',
  },
  {
    path: '/dashboard/colegios',
    shortTitle: 'Predictivo: Carreras y Sedes',
    title: 'Predictivo: Carreras y Sedes',
    subtitle: 'Panel de resultados de los colegios participantes en el proceso de admisión según modalidades CEA y PA.',
    powerBiUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiM2Y4OWY1NjEtODc1OC00NjFmLTlhZDctNDBlZDlmNDk1NThlIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9&navContentPaneEnabled=false&filterPaneEnabled=false',
  },
  {
    path: '/dashboard/comparativo',
    shortTitle: 'Información de Facultades',
    title: 'Información de Facultades',
    subtitle: 'Análisis de tendencias y objetivos entre periodos de admisión.',
    powerBiUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiZjJiNWFmYWEtMGJjNS00MDI1LWE4NTMtZjE2OGJiNTYxNDhkIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9&navContentPaneEnabled=false&filterPaneEnabled=false',
  },
  {
    path: '/dashboard/predictivo-facultades',
    shortTitle: 'Predictivo – Facultades',
    title: 'Módulo Predictivo – Facultades',
    subtitle: 'Análisis predictivo de postulantes y tendencias por facultad.',
    comingSoon: true,
  },
]

