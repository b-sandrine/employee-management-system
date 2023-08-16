import '../assets/styles/dashboard.css'
import Sidebar from '../components/sidebar'
import Employees from '../pages/employees'

export default function Dashboard () {
    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <Employees />
            </div>
        </>
    )
}