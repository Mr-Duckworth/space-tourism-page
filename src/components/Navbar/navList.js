import React from "react";
import NavItem from "./navItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'


function NavList()  {

    function onShow () {

    document.getElementById("menu-icon").style.display = "none"
    document.getElementById("menu").style.display = "block"
        
    }

    function onCancel() {

        document.getElementById("menu-icon").style.display = "block"
        document.getElementById("menu").style.display = "none"
    }

    return (
        <div >
            <nav className="nav-list nav-text">    
                <NavItem number="00" title="home" />
                <NavItem number="01" title="destination" />   
                <NavItem number="02" title="crew" />
                <NavItem number="03" title="technology" />
            </nav>
            <div id="menu-icon" onClick={onShow} >
                <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#d0d5f9"}} />
            </div>
            <nav className="side-navbar" id="menu">
                <FontAwesomeIcon onClick={onCancel} icon={faXmark} size="2xl" style={{color: "#d0d5f6", float: "right", marginTop: "20px", marginRight: "25px"}} />
                <div className="mobile-nav-list " >
                    <NavItem number="00" title="home" />
                    <NavItem number="01" title="destination" />   
                    <NavItem number="02" title="crew" />
                    <NavItem number="03" title="technology" />
                </div>
            </nav>
        </div>
    )
}

export default NavList;