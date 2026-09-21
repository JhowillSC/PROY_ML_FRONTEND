import { dashboardModules } from '../../config/dashboardModules'
import { ComingSoonFrame } from '../../Components/ComingSoonFrame'

export function DashboardPredictivoFacultadesPage() {
  const module = dashboardModules[3]

  return <ComingSoonFrame title={module.title} subtitle={module.subtitle} />
}
