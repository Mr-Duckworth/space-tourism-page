import React from "react";
import NavItem from "./navItem";


function NavList() {

    return (<div className="nav-list">    
        <NavItem number="00" title="home" />
        <NavItem number="01" title="destination" />   
        <NavItem number="02" title="crew" />
        <NavItem number="03" title="technology" />
    </div>)
}

export default NavList;