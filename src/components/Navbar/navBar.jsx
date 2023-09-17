import React from "react";

import "../../styles/navbar.scss"
import NavList from "./navList";
import NavHeader from "./navHeader";

function NavBar() {
    return (<div className="nav-bar">
        <NavHeader />
        <hr className="nav-line" />
        <NavList />
    </div>)
}

export default NavBar;