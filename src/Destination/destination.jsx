import React from "react";

import "../styles/destination.scss"

import Heading from "../components/heading";
import Page from "./page";
import { DestinationData } from "../data";

function Destination(props) {

    return (
        <div>
            <Heading number= "01" text="Pick your destination" />
            {/* <Page distance={DestinationData[0].distance} travel={DestinationData[0].travel} name={DestinationData[0].name} index={DestinationData[0].index} content={DestinationData[0].description} />
            <Page distance={DestinationData[1].distance} travel={DestinationData[1].travel} name={DestinationData[1].name} index={DestinationData[1].index} content={DestinationData[1].description} />
            <Page distance={DestinationData[2].distance} travel={DestinationData[2].travel} name={DestinationData[2].name} index={DestinationData[2].index} content={DestinationData[2].description} /> */}
            <Page distance={DestinationData[3].distance} travel={DestinationData[3].travel} name={DestinationData[3].name} index={DestinationData[3].index} content={DestinationData[3].description} />
        </div>
    ) 

}

export default Destination;