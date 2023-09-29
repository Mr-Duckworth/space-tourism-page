import React from "react";
import { NavLink } from "react-router-dom";


function NavItem(props) {

    
    return (

            <NavLink to={"/" + props.title}  className={({isActive, isPending}) => 
                isPending ? "pending" : isActive ? "active" : "" 
            } >
                <span className="bold">{props.number}</span> {props.title}
            </NavLink>
    )
}

export default NavItem;