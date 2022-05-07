import React, {useState} from 'react'
import {FaCaretLeft, FaCaretRight} from "react-icons/fa"
import Data from './Data'
import './Slide.css'


const Slide = ({ slides }) => {

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
            <section className="slider">
       <div className="control-btn">
           <button className="prev" onClick={prevSlide}>
              <FaCaretLeft/>
           </button>
           <button className="next" onClick={nextSlide}>
              <FaCaretRight/>
           </button>
       </div>

        

   {Data.map((slide, index) => {
       return (
           <div className={index === current ? "slide active" : "slide" } key={index}>
               {index === current && <img src ={slide.images} alt="room-1"/> }
               </div>
       )
   })}
    </section>


                 <section className="room-lists">
                 <div className="details">
              <h2>Single Bedroom</h2>
                   <span>50$</span>
             <button className="primary-btn">Book Now</button>
          </div>
  
                 </section>
            <section className="slider">
       <div className="control-btn">
           <button className="prev" onClick={prevSlide}>
              <FaCaretLeft/>
           </button>
           <button className="next" onClick={nextSlide}>
              <FaCaretRight/>
           </button>
       </div>

        

   {Data.map((slide, index) => {
       return (
           <div className={index === current ? "slide active" : "slide" } key={index}>
               {index === current && <img src ={slide.images} alt="room-2"/> }
               </div>
       )
   })}
    </section>


                 <section className="room-lists">
                 <div className="details">
              <h2>Double Bedroom</h2>
                   <span>120$</span>
             <button className="primary-btn">Book Now</button>
          </div>
  
                 </section>
            <section className="slider">
       <div className="control-btn">
           <button className="prev" onClick={prevSlide}>
              <FaCaretLeft/>
           </button>
           <button className="next" onClick={nextSlide}>
              <FaCaretRight/>
           </button>
       </div>

        

   {Data.map((slide, index) => {
       return (
           <div className={index === current ? "slide active" : "slide" } key={index}>
               {index === current && <img src ={slide.images} alt="room-3"/> }
               </div>
       )
   })}
    </section>


                 <section className="room-lists">
                 <div className="details">
              <h2>Family Bedroom</h2>
                   <span>250$</span>
             <button className="primary-btn">Book Now</button>
          </div>
  
                 </section>
        </>
    )
}

export default Slide

