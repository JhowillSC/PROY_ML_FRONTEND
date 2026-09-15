import { DashboardFrame } from '../../Components/DashboardFrame'
import { dashboardModules } from '../../config/dashboardModules'

export function DashboardComparativoPage() {
  const module = dashboardModules[2]

  return <DashboardFrame title={module.title} subtitle={module.subtitle} src={module.powerBiUrl} />
}
