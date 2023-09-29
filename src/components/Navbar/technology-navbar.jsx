import React from "react";
import { NavLink } from "react-router-dom";

function TechnlogyNavBar(props) {

    return (
        <div className="technology-nav-container">
            <NavLink to={"/technology/vehicle"} className={({isActive, isPending}) => isPending ? "pending" : isActive? "active" : "" } >1</NavLink>
            <NavLink to={"/technology/spaceport"} className={({isActive, isPending}) => isPending ? "pending" : isActive? "active" : "" } >2</NavLink>
            <NavLink to={"/technology/capsule"} className={({isActive, isPending}) => isPending ? "pending" : isActive? "active" : "" } >3</NavLink>
        </div>
    )

}

export default TechnlogyNavBar;