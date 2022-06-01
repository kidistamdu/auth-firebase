import React, {useState, useEffect} from 'react'
import './Slide.css'

import { collection, query, where, getDocs ,doc,getDoc} from "firebase/firestore";
import {db} from '../../context/firebase-config'




const Slide = ({ slides }) => {
  
  
    const [allRooms, setAllRooms] = useState([])
    
    
     const [oneRoom, setOneRoom] = useState([])

     useEffect(() => {
      //  const q = query(collection(db, "rooms" , "Dr6N9ORu8FnBKgnlkmKU"));
      const docRef = doc(db, "rooms", "Dr6N9ORu8FnBKgnlkmKU");
        const getRoom = async() => {

           
           //     const querySnapshot = await getDocs(q);
           //   setOneRoom(querySnapshot.docs.map((doc) => doc.data()))
                
           const doc = await getDoc(docRef);
             
            setOneRoom(doc.data()); 
         }
         getRoom();
     }, [])
     
     console.log(allRooms);
     
      const bookNow = (value) =>{
   console.log(value);
      }
      
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null 
    }

   
    return (
        <>
           

        
   <div >

    

   <div>  {oneRoom["type"]} </div>
   <div>{oneRoom["roomNumber"]}</div> 
   {
    
    allRooms.map((slide, index) => (
       
       <div key={index}> {slide.roomNumber}
       <div>  
            <img src={slide.img}/>
    </div>
         <div>{slide.id}</div>
        <div className="details">{slide.type}
        </div>
        <button className="primary-btn" onClick={()=> bookNow(slide.id)}>BookNow</button>
        </div>

     
    )) }
   
</div>



   
        </>
    )
}

export default Slide

