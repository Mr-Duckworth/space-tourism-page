import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {

    return (
        <p className="nav-text">
            <NavLink to={"/destination/" + props.title}  className={({isActive, isPending}) => 
                isPending ? "pending" : isActive? "active" : ""
            } >
                {props.title}
            </NavLink>
        </p>
    )

}

export default NavItem;