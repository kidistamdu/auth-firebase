import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


const Home = () => {

 const [room, setRoom] = useState("");
 const [adult, setAdult] = useState("");
 const [start, setStart] = useState("");
 const [end, setEnd] = useState("");
 const [child, setChild] = useState("");
 const [quantity, setQuantity] = useState("");

   function handleData(e) {
       e.preventDefault()
       console.warn("all data", room , adult , start , end , child , quantity)
   }


    
  
    return (
        <>


            <section className="slide-form">
                <div className="container">
                    <h2>Enjoy your Holiday</h2>
                    <span>Welcome</span>


                    <form onSubmit={handleData} >
                        <select className="type" onChange={(e)=> setRoom(e.target.value)}>
                            <option>Single Bedroom</option>
                            <option>Double Bedroom</option>
                            </select>
                        <div className="flex_space">
                            <input type="date" placeholder="Check In" onChange={(e)=>setStart(e.target.value)}/>
                            <input type="date" placeholder="Check Out" onChange={(e)=>setEnd(e.target.value)}/>
                        </div>
                         <div className="flex_space">
                         <input type="number" placeholder="Adult"onChange={(e)=>setAdult(e.target.value)}/>
                         <input type="number" placeholder="Children" onChange={(e)=>setChild(e.target.value)} />
                         </div>
                         <input type="number" placeholder="Rooms" onChange={(e)=>setQuantity(e.target.value)}/>
                         <Link to="/rooms"> <input type="Submit" value="Search" className="submit" /> </Link>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Home
