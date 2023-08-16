import { Outlet } from 'react-router'
import '../assets/styles/dashboard.css'
import Sidebar from '../components/sidebar'

export default function Dashboard () {
    return (
        <>
            <div className="dashboard">
                <Sidebar />
                <div className="changing--pages">
                    <Outlet />
                </div>
            </div>
        </>
    )
}