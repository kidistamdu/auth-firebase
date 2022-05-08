import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Login from './components/Login/Login'
import Home from './Pages/Home/Home';
import Rooms from './components/Rooms/Rooms'
import { AuthContextProvider } from './context/UserAuthContext';
import Register from './components/Login/Register';
import BookNow from './Pages/BookNow/BookNow';





const App = () => {
  return (
    <>
    
    <NavBar/>
    <AuthContextProvider>
       
          <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/login" exact element={<Login/>}/>
              <Route path="/register" exact element={<Register/>}/>
              <Route path="/rooms" exact element={<Rooms/>}/>
              <Route path="/book" exact element={<BookNow/>}/>
              
              
            </Routes>
            </AuthContextProvider>
  
    </>
  )
}

export default App


