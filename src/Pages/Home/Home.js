import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <>
           

            <section className="slide-form">
                <div className="container">
                    <h2>Enjoy your Holiday</h2>
                    <span>Welcome</span>


                    <form action="">
                        <input type="text" placeholder="Search City" name="" id=""/>
                        <div className="flex_space">
                            <input type="date" placeholder="Check In"/>
                            <input type="date" placeholder="Check Out"/>
                        </div>
                         <div className="flex_space">
                         <input type="number" placeholder="Adult(s)(+18)"/>
                         <input type="number" placeholder="Childern(0 -17)"/>
                         </div>
                         <input type="number" placeholder="Rooms"/>
                         <input type="Submit" value="Search" className="submit"/>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Home
