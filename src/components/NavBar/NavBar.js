import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <>
          <nav className="navbar">
              <div className="container flex_space">

            <ul>

                <li><Link to="/">Book</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
               
               

                    
             </ul>

                  

            
              </div>
          </nav>
        </>
    )
}

export default NavBar