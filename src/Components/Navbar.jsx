import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="navbar">
        <Link className = "Link" to = "/">Home</Link>
        <Link className = "Link" to = "/Booking">Booking</Link>
        <Link className = "Link" to = "Login">Login</Link> 
        </div>
        </>
    )
}
export{ Navbar }