import React from "react";
import { NavLink } from "react-router-dom";

function Circle() {


    return(
        <div className="circle"> 
        <NavLink to={"/destination"} className="explore">EXPLORE</NavLink>
        </div>
    )
}

export default Circle