import React from 'react'
import { Link } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import "./Home.css"


const Home = () => {
    
  
    return (
        <>
           

            <section className="slide-form">
                <div className="container">
                    <h2>Enjoy your Holiday</h2>
                    <span>Welcome</span>


                    <form  >
                        <input type="text" placeholder="Room Type" name="" id=""/>
                        <div className="flex_space">
                            <input type="date" placeholder="Check In"/>
                            <input type="date" placeholder="Check Out"/>
                        </div>
                         <div className="flex_space">
                         <input type="number" placeholder="Adult(s)(+18)"/>
                         <input type="number" placeholder="Childern(0 -17)"/>
                         </div>
                         <input type="number" placeholder="Rooms"/>
                         <Link to="/room"> <input type="Submit" value="Search" className="submit" /> </Link>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Home
