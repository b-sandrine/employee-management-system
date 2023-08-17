import { MdMore, MdMoreHoriz, MdMoreVert, MdSearch } from 'react-icons/md';
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
                <div className="table">
                    <table id="myTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Names</th>
                                <th>Department</th>
                                <th>Contact</th>
                                <th>Hire Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Dushimimana Sandrine</td>
                                <td>Development</td>
                                <td>(+250) 791 646 583 <br />
                                    sanrdushimana@gmail.com
                                </td>
                                <td>2022-09-06</td>
                                <td>
                                    <MdMoreVert />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Employees; 