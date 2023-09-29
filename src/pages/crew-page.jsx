import React from "react";


import "../styles/crew.scss"

import NavBar from "../components/Navbar/navBar";
import Heading from "../components/heading";
import BodyOfText from "../components/bodyOfText";
import CrewImage from "../components/crew-image";
import CrewNavBar from "../components/Navbar/crew-navbar/navbar";

function CrewPage(props) {

    return (
    <div className="crew">
        <NavBar />
        <Heading number= "02" text="MEET YOUR CREW" />
        <div className="crew-content">
            <div className="text-content">
                <h4>{props.role}</h4>
                <h3>{props.name}</h3>
                <BodyOfText content={props.content} />
            </div>
            <CrewNavBar />
            <hr className="hr-line" />
            <CrewImage index={props.index} alt="A crew member" />
        </div>
    </div>
    )
}
export default CrewPage;