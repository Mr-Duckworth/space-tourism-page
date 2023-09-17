import React from "react";

import "../styles/crew.scss"

import Page from "./page";
import Heading from "../components/heading";
import { CrewData } from "../data";

function Crew() {

    return (
        <div>
            <Heading number= "02" text="MEET YOUR CREW" />
            <Page role={CrewData[0].role} name={CrewData[0].name} index={CrewData[0].index} content={CrewData[0].bio} />
            {/* <Page role={CrewData[1].role} name={CrewData[1].name} index={CrewData[1].index} content={CrewData[1].bio} />
            <Page role={CrewData[2].role} name={CrewData[2].name} index={CrewData[2].index} content={CrewData[2].bio} />
            <Page role={CrewData[3].role} name={CrewData[3].name} index={CrewData[3].index} content={CrewData[3].bio} /> */}
            <div className="crew-navbar">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    )

}

export default Crew;