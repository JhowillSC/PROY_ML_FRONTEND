import { DashboardFrame } from '../../Components/DashboardFrame'
import { dashboardModules } from '../../config/dashboardModules'

export function DashboardColegiosPage() {
  const module = dashboardModules[1]

  return <DashboardFrame title={module.title} subtitle={module.subtitle} src={module.powerBiUrl} />
}
