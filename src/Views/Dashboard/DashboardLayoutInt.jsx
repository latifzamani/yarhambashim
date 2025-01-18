import DashboardLayoutMain from './DashboardLayoutMain'
import { Outlet } from 'react-router-dom'

function DashboardLayoutInt() {
  return (
    <DashboardLayoutMain>
        <Outlet/>
    </DashboardLayoutMain>
  )
}

export default DashboardLayoutInt