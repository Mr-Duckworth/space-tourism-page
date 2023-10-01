import React from "react";


import logo from "../../assets/shared/logo.svg"
import { Link } from "react-router-dom";



function NavHeader() {

    return (
    <Link to={"/"} >
    <img className="logo-img" src={logo}  alt="company logo" />
    </Link>
)
        

}

export default NavHeader;