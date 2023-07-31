import React from 'react';
import{Routes,Route} from 'react-router-dom'
import Home from "./Component/Home/Home"
import Student from "./Component/Students/Student"
import Contact from "./Component/ContactUs/ContactUs"
import Navbar from './Component/NavBar/Navbar';


const App =()=> {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/student' element={<Student/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </>
  );
}

export default App;
