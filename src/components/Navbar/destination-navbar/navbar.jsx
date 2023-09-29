import React from "react";

import NavItem from "./navItem";

function DestinationNavBar(props) {

    return (
        <div className="destination-nav-container">
           <NavItem title="moon" /> 
           <NavItem title="mars" /> 
           <NavItem title="europa" /> 
           <NavItem title="titan" /> 
        </div>
    )

}

export default DestinationNavBar;