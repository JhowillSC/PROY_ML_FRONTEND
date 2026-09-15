export interface DashboardModule {
  path: string
  shortTitle: string
  title: string
  subtitle: string
  powerBiUrl: string
}

export const dashboardModules: DashboardModule[] = [
  {
    path: '/dashboard/general',
    shortTitle: 'Información General',
    title: 'Información General de Postulantes',
    subtitle: 'Análisis de procedencia y distribución de postulantes del proceso de admisión (2023-I a 2027-I).',
    powerBiUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiMzFjNmY2OGMtMDc0MC00MGFlLTlmNGQtN2NjOTRmMDNkOTgyIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9&navContentPaneEnabled=false&filterPaneEnabled=false',
  },
  {
    path: '/dashboard/colegios',
    shortTitle: 'Información Colegios',
    title: 'Información Colegios (CEA - PA)',
    subtitle: 'Panel de resultados de los colegios participantes en el proceso de admisión según modalidades CEA y PA.',
    powerBiUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiODFlNGY4YzctMWY2ZS00YzdlLTkzMWItZmU0NDUxOTVmMTZiIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9&navContentPaneEnabled=false&filterPaneEnabled=false',
  },
  {
    path: '/dashboard/comparativo',
    shortTitle: 'Análisis Comparativo',
    title: 'Análisis Comparativo',
    subtitle: 'Análisis de tendencias y objetivos entre periodos de admisión.',
    powerBiUrl:
      'https://app.powerbi.com/view?r=eyJrIjoiNWRlMTBjNmYtN2U1Ni00NDk3LThjZGMtYWFiZjU4ODg2ODRkIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9&navContentPaneEnabled=false&filterPaneEnabled=false',
  },
]
