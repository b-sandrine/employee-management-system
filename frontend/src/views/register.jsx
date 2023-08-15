import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [viewPassword, setViewPassword] = useState(true);

    function ViewPassword() {
        setViewPassword(!viewPassword);
    }

    return (
        <>
            <div className="extras"></div>
            <div className="form">
                <h1>Register Your Account</h1>
                <div className="input">
                    <FaUser className="icon" />
                    <input type="text" name="" id="" placeholder="Enter Fullnames"/>
                </div>
                <div className="input">
                    <FaEnvelope className="icon" />
                    <input type="email" name="" id="" placeholder="Enter email"/>
                </div>
                <div className="input">
                    <FaLock className="icon"/>
                    <input 
                        type={viewPassword ? "password" : "text"}
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
                <button>Sign In</button>
                <div className="extra">
                    <p>OR</p>
                    <p>Already an have account?<span>Login</span></p>
                </div>
            </div>
            <div className="extras-dec"></div>
        </>
    )
}

export default Register;