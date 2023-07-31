import React from "react"
import './Navbar.css'
import { NavLink } from "react-router-dom"


const Navbar = ()=>{
    return(
        <>
        <div className="nav">
        <ul>
            <NavLink to ={'/'}className="link"><li>Home</li></NavLink><br></br>
            <NavLink to={'/student'}className="link"><li>Student</li></NavLink>
            <NavLink to={'/contact'}className="link"><li>ContactUs</li></NavLink>
       
        </ul>
        </div>
        
        
        </>
    )
}
export default Navbar