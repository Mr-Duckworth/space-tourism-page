import React from "react";

function Heading(props) {

    return (
        <h5 className="text-heading"><span className="bold">{props.number}</span>{props.text}</h5>
    )

}

export default Heading;