import '../assets/styles/sidebar.css'
import { FaHome, FaTasks, FaUsers } from "react-icons/fa";
import { MdAnalytics, MdCancel, MdHelp, MdLogout, MdSettings } from 'react-icons/md'
import { useNavigate } from 'react-router';

const Sidebar = () => {
    const navigate = useNavigate();

    function handleNavigate () {
        navigate('/login')
    }

    function navigateToHome () {
        navigate('/dashboard')
    }

    function navigateToEmployees () {
        navigate('/dashboard/employees')
    }

    function navigateToTasks () {
        navigate('/dashboard/tasks')
    }

    function navigateToAnalytics () {
        navigate('/dashboard/analytics')
    }

    function navigateToSettings () {
        navigate('/dashboard/settings')
    }

    function navigateToFAQS () {
        navigate('/dashboard/faqs')
    }
    return (
        <>
            <div className="sidebar">
                <div className="viewsidebar">
                    <MdCancel />
                </div>
                <div className="links">
                    <div className="sidelink" onClick={navigateToHome}>
                        <FaHome />
                        <p>Home</p>
                    </div>
                    <div className="sidelink" onClick={navigateToEmployees}>
                        <FaUsers />
                        <p>Employees</p>
                    </div>
                    <div className="sidelink" onClick={navigateToTasks}>
                        <FaTasks />
                        <p>Tasks</p>
                    </div>
                    <div className="sidelink"onClick={navigateToAnalytics} >
                        <MdAnalytics />
                        <p>Analytics</p>
                    </div>
                    <div className="lowerlinks">
                        <div className="sidelink" onClick={navigateToSettings}>
                            <MdSettings />
                            <p>Settings</p>
                        </div>
                        <div className="sidelink" onClick={navigateToFAQS}>
                            <MdHelp />
                            <p>FAQS</p>
                        </div>
                        <div className="sidelink logout" onClick={handleNavigate}>
                            <MdLogout />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;