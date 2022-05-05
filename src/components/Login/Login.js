import React  from 'react'
import {useState} from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from 'react-router-dom';
import "./Design.css"
import { auth } from '../../firebase-config';

const Login = () => {
    
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    
    const login = async () => {
        try{ 
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail, 
                loginPassword);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <>
            
            <section className="forms top">
            <div className="container">
                <div className="sign-box">
                    <p>Enter your e-mail and password below to log in to your account and use the benefit of our website</p>
                    <form >
                         <input type="email" name="email" placeholder="Email" onChange={(e) => {setLoginEmail(e.target.value);}} />
                         <input type="password" name="password" placeholder="Password" onChange={(e) => {setLoginPassword(e.target.value);}}/>
                    
                    <div className="flex_space">
                        <div className="flex">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <div className="flex">
                            <span>I forgot my password</span>
                        </div>
                 
                    </div>
                    <button type="submit" className="primary-btn" onClick={login}> Sign In</button>
                    <div className="new-account">
                   <p>Don't Have An Account? <Link to="/register">Sign Up</Link></p>
                   </div>
                  
                    </form>
                   
                </div>
            </div>
        </section>
        </>
    )
}

export default Login
