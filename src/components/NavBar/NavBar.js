import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <>

        <section className="users">
              <form>
                 <Link to="/admin"><button className="btn">Admin </button> </Link> 
              </form>
        </section>

          <nav className="navbar">
              <div className="container flex_space">

            <ul>

                <li><Link to="/">Book</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/register">SignUp</Link></li>
               
               

                    
             </ul>

                  

            
              </div>
          </nav>
        </>
    )
}

export default NavBar
