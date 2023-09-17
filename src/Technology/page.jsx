import React from "react";


import TechnologyImage from "../components/technology-image";
import TechnlogyNavBar from "../components/Navbar/technology-navbar";
import BodyOfText from "../components/bodyOfText";

function Page(props) {

    return (
        <div className="technology-container">
            <div className="technology-text-container">
                <TechnlogyNavBar />
                <div>
                    <p className="nav-text">THE TERMINOLOGY…</p>
                    <h3>{props.name}</h3>
                    <BodyOfText content={props.content} />
                </div>
            </div>
            <TechnologyImage index={props.index} />
        </div>
    )

}

export default Page;