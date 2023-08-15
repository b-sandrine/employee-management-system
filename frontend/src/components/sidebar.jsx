import '../assets/styles/sidebar.css'
import { FaHome, FaTasks, FaUsers } from "react-icons/fa";
import { MdAnalytics, MdCancel, MdHelp, MdLogout, MdSettings } from 'react-icons/md'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="viewsidebar">
                    <MdCancel />
                </div>
                <div className="links">
                    <div className="sidelink">
                        <FaHome />
                        <p>Home</p>
                    </div>
                    <div className="sidelink">
                        <FaUsers />
                        <p>Employees</p>
                    </div>
                    <div className="sidelink">
                        <FaTasks />
                        <p>Tasks</p>
                    </div>
                    <div className="sidelink">
                        <MdAnalytics />
                        <p>Analytics</p>
                    </div>
                    <div className="lowerlinks">
                        <div className="sidelink">
                            <MdSettings />
                            <p>Settings</p>
                        </div>
                        <div className="sidelink">
                            <MdHelp />
                            <p>FAQS</p>
                        </div>
                        <div className="sidelink logout">
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