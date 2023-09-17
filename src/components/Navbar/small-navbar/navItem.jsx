import React from "react";

function NavItem(props) {

    return (
        <p className="nav-text nav-item">
            {props.title}
        </p>
    )

}

export default NavItem;