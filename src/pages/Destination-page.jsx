import React from "react";

import "../styles/destination.scss"


import NavBar from "../components/Navbar/navBar";
import Heading from "../components/heading";
import DestinationNavBar from "../components/Navbar/destination-navbar/navbar";
import BodyOfText from "../components/bodyOfText";
import DestinationImage from "../components/destination-image";


function DestinationPage(props) {

    return (
    <div className="destination">
        <NavBar />
        <Heading number= "01" text="Pick your destination" />
        <div>
            <DestinationImage index={props.index} />
            <div className="destination-text-content">
                <DestinationNavBar />
                <h2>{props.name}</h2>
                <BodyOfText content={props.content} />
                <hr className="hr-line" />
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
    </div>
    )
    

}

export default DestinationPage;