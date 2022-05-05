import React  from 'react'
import {useState} from "react";
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebase-config';

const Signup = () => {

    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const handleSubmit = async  () => {

        try{ 
            const user = await createUserWithEmailAndPassword(
                auth,
                signupEmail, 
                signupPassword);
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
                    <p>Register for a new account</p>
   
                    <form onSubmit={handleSubmit}>
                         <input type="email" name="email" placeholder="Email" onChange={(e) => {setSignupEmail(e.target.value);}}/>
                         <input type="password" name="password" placeholder="Password" onChange={(e) => {setSignupPassword(e.target.value);}}/>
                    
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

export default Signup
