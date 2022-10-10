
import './App.css';
import React from 'react'
import Navbar from './Layouts/Navbar.jsx';
import Addstudent from './Components/Addstudent'
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Viewstudent from './Components/Viewstudents'


const App = () => {
  return (
    <Router>
    
    <Navbar/>
    
    <Routes>
      <Route path='/' element={ <Addstudent/>}>
     
      
      </Route>
      <Route path='/viewstudents' element={ <Viewstudent/>}>
      
      </Route>
      </Routes>
   
  
    </Router>
    
  );
}

export default App

