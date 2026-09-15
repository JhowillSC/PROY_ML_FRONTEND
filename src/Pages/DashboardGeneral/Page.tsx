import { DashboardFrame } from '../../Components/DashboardFrame'
import { dashboardModules } from '../../config/dashboardModules'

export function DashboardGeneralPage() {
  const module = dashboardModules[0]

  return <DashboardFrame title={module.title} subtitle={module.subtitle} src={module.powerBiUrl} />
}
