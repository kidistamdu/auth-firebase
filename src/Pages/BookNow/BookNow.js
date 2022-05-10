import React from 'react'
import './BookNow.css'
import {useState} from 'react'

const BookNow = () => {
    const  [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [company, setCompany] = useState("")
    const [message, setMessage] = useState("")

    const [allValue, setAllValue] = useState([])
    const formSubmit = (e) => {
        e.preventDefault()

        const newValue = {fname,lname,phone,email,subject,company,message}
        setAllValue([...allValue,newValue])
         
        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setSubject("")
        setCompany("")
        setMessage("")
    }

    return (
     <>
                  
                  <section className="contact mtop">
                <div className="container flex">
                    <div className="main-content">
                        <h2>Booking Confirmation </h2>
                        <p>Fill out personal details</p>
                        <form onSubmit={formSubmit}>
                            <div className="grid1">
                                <div className="input">
                                    <span>
                                        First Name <label>*</label>
                                    </span>
                                    <input type="text" name="fname" id="" value={fname} onChange={(e) => setFname(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <span>
                                        Last Name <label>*</label>
                                    </span>
                                    <input type="text" name="lname" id="" value={lname} onChange={(e) => setLname(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <span>
                                        Phone Number<label>*</label>
                                    </span>
                                    <input type="number" name="phone" id="" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <span>
                                        Email<label>*</label>
                                    </span>
                                    <input type="email" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <span>
                                        Passport Number<label>*</label>
                                    </span>
                                    <input type="text"name="subject" id="" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <span>
                                     Expiration Day
                                    </span>
                                    <input type="date" name="company" id="" required value={company} onChange={(e) => setCompany(e.target.value)}/>
                                </div>
                                <div className="input inputlast">
                                    <span>
                                    Write your Message<label>*</label>
                                    </span>
                                </div>
                            </div>
                            <button className="primary-btn">Pay now</button>
                        </form>
                    </div>
                </div>

            </section>
            <section className="show-data">
                {allValue.map((currentValue) => {
                    const {fname,lname,phone,email,subject,company,message} = currentValue

                    return(

                        <div className="sign-box">
                        <h1>Send Successfully</h1>
                        <h3>
                            First Name: <p>{fname}</p>
                        </h3>
                        <h3>
                            Last Name: <p>{lname}</p>
                        </h3>
                        <h3>
                            Phone Number: <p>{phone}</p>
                        </h3>
                        <h3>
                            Email: <p>{email}</p>
                        </h3>
                        <h3>
                            Passport: <p>{subject}</p>
                        </h3>
                        <h3>
                            Expire date: <p>{company}</p>
                        </h3>
                        <h3>
                            Message: <p>{message}</p>
                        </h3>
                    </div>
                    )
                })}
          
            </section>    
      

        </>
    )
}

export default BookNow
