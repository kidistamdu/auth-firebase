import React from 'react'
import {useState} from "react"
import './Design.css'
import { Link, useNavigate } from 'react-router-dom'
import {useUserAuth} from "../../context/UserAuthContext"
import {Alert} from "react-bootstrap"
const Register = () => {

    const [email, setEmail] = useState("");
        const [error, setError] = useState("");
        const [password, setPassword] = useState("");
        const { register } = useUserAuth();
        let navigate = useNavigate();
        
        const [allValue, setAllValue] = useState([])
        const handleSubmit = async (e) => {
          e.preventDefault();
          setError("");
          try {
            await register(email, password);
            navigate("/");
          } catch (err) {
            setError(err.message);
          }
          const newValue = {email,password}
          setAllValue([...allValue,newValue])
          setEmail("")   
          setPassword("")
    
        
     };
 
    return (

        <>
         <section className="forms top">
            <div className="container">
                <div className="sign-box">
                    <p>Register for a new account</p>
                    {error && <Alert variant="danger">{error}</Alert>}
   
                    <form onSubmit={handleSubmit}>
                         <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                         <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    
                    <div className="flex_space">
                        <div className="flex">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                       
                 
                    </div>
                    <button type="submit" className="primary-btn" > Sign Up</button>
                    <div className="new-account">
                   <p>Already have an account? <Link to="/register">Sign in</Link></p>
                   </div>
                  
                    </form>
                   
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Register
