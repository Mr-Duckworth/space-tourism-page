import React from "react";

import "../styles/technology.scss"

import Page from "./page";
import Heading from "../components/heading";
import { TechnologyData } from "../data";

function Technology() {

    return (
        <div>
            <Heading number= "03" text="SPACE LAUNCH 101" />
            <Page name={TechnologyData[0].name} index={TechnologyData[0].index} content={TechnologyData[0].description} />
            {/* <Page name={TechnologyData[1].name} index={TechnologyData[1].index} content={TechnologyData[1].description} />
            <Page name={TechnologyData[2].name} index={TechnologyData[2].index} content={TechnologyData[2].description} /> */}
        </div>
    )
}

export default Technology;