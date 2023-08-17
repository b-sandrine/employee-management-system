import { MdSearch } from 'react-icons/md';
import '../assets/styles/employees.css'

const Employees = () => {
    return (
        <>
            <p>Home &gt; Employees</p>
            <div className="employees">
                <h3>Company Employees</h3>
                <div className="line"></div>
                <div className="input">
                    <input type="search" name="" id="" placeholder='Search Employees' />
                    <MdSearch className='icon'/>
                </div>
            </div>
        </>
    )
}

export default Employees; 