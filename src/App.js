import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup';
import Home from './Pages/Home/Home';




const App = () => {
  return (
    <>
    
    <NavBar/>
       
          <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/login" exact element={<Login/>}/>
              <Route path="/signup" exact element={<Signup/>}/>
              
            </Routes>
           
  
    </>
  )
}

export default App


