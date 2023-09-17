import React from "react";

import NavItem from "./navItem";

function SmallNavBar(props) {

    return (
        <div className="small-nav-container">
           <NavItem title="moon" /> 
           <NavItem title="mars" /> 
           <NavItem title="europa" /> 
           <NavItem title="titan" /> 
        </div>
    )

}

export default SmallNavBar;