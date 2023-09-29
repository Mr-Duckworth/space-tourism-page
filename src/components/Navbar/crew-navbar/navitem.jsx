import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {

    return (
        <NavLink to={"/crew/" + props.title} className={({isActive, isPending}) => isPending ? "pending" : isActive? "active" : "" }>
            <span className="dot"  />
        </NavLink>
    )

}

export default NavItem;
