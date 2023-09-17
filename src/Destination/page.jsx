import React from "react";

import SmallNavBar from "../components/Navbar/small-navbar/navbar";
import BodyOfText from "../components/bodyOfText";
import DestinationImage from "../components/destination-image";


function Page(props) {

    return (
    <div>
        <DestinationImage index={props.index} />
        <div className="destination-text-content">
            <SmallNavBar />
            <h2>{props.name}</h2>
            <BodyOfText content={props.content} />
            <hr className="nav-line" />
            <div className="sub-heading">
                <div>
                <p className="sub-heading-two">AVG. DISTANCE</p>
                <p className="sub-heading-one">{props.distance}</p>
                </div>
                <div>
                <p className="sub-heading-two">Est. travel time</p>
                <p className="sub-heading-one">{props.travel}</p>
                </div>
            </div>
        </div>
    </div>
    )
    

}

export default Page;