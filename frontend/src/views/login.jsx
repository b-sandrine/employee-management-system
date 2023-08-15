import { useState } from 'react';
import { FaEye, FaLock, FaUser, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router';

const Login = () => {
    const [viewPassword, setViewPassword] = useState(true);
    const navigate = useNavigate()

    function ViewPassword () {
        setViewPassword(!viewPassword);
    }

    function handleNavigate() {
        navigate('/register')
    }

    function handleNavigateToDashboard () {
        navigate('/dashboard')
    }
    return (
        <>
            <div className="extras"></div>
            <div className="form">
                <h1>Log Into Your Account</h1>
                
                <div className="input">
                    <FaUser className='icon' />
                    <input type="text" name="" id="" placeholder="Enter username or email"/>
                </div>
                <div className="input">
                    <FaLock className='icon' />
                    <input 
                        type={viewPassword ? "password" : "text" }
                        name="" 
                        id="" 
                        placeholder="Enter password"
                    />
                    
                    {
                        viewPassword ?
                        <FaEye className="icon" onClick={ViewPassword}/>
                        :
                        <FaEyeSlash className="icon" onClick={ViewPassword}/>
                    }
                </div>
                <button onClick={handleNavigateToDashboard}>Login</button>
                <div className="extra">
                    <p>OR</p>
                    <p>Don't have an account?<span onClick={handleNavigate}>Register</span></p>
                </div>
            </div>
            <div className="extras-dec"></div>
        </>
    )
}

export default Login;