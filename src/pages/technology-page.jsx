import React from "react";

import "../styles/technology.scss"

import NavBar from "../components/Navbar/navBar";
import Heading from "../components/heading";
import TechnologyImage from "../components/technology-image";
import TechnlogyNavBar from "../components/Navbar/technology-navbar";
import BodyOfText from "../components/bodyOfText";

function TechnologyPage(props) {

    return (
        <div className="technology">
            <NavBar />
            <div>
                <Heading number= "03" text="SPACE LAUNCH 101" />
                <TechnologyImage index={props.index} />
                <div className="technology-text-container">
                    <TechnlogyNavBar />
                    <div>
                        <p className="nav-text">THE TERMINOLOGY…</p>
                        <h3>{props.name}</h3>
                        <BodyOfText content={props.content} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TechnologyPage;