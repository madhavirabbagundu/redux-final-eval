import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home'
import { Booking } from './Components/Booking'
import { Login } from './Components/Login'
import { Navbar } from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path='/Booking' element = {<Booking/>}></Route>
        <Route path = 'Login' element = {<Login/>}></Route>
      
      
      </Routes>
     
    </div>
  );
}

export default App;
