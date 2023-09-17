import React from "react";
import { Outlet, Link } from "react-router-dom";


function NavItem(props) {
    
    return (
        <Link to={props.title}>
            <div className="nav-item nav-text" ><span className="bold">{props.number}</span> {props.title}</div>
        </Link>
    )
}

export default NavItem;