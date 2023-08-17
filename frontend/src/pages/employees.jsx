import { MdSearch } from 'react-icons/md';
import '../assets/styles/employees.css'

const Employees = () => {
    return (
        <>
            <p>Home &gt; Employees</p>
            <div className="employees">
                <h3>Company Employees</h3>
                <div className="line"></div>
                <div className="operations">
                    <div className="options">
                        <div className="input">
                            <input type="search" name="" id="" placeholder='Search Employees' />
                            <MdSearch className='icon' />
                        </div>
                        <select name="" id="">
                            <option value="1">Active</option>
                            <option value="2">Away</option>
                        </select>
                    </div>
                    <div className="buttons">
                        <button>Add Employee</button>
                        <button>Import Employee</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employees; 