import React from "react";

import BodyOfText from "../components/bodyOfText";
import CrewImage from "../components/crew-image";

function Page(props) {

    return (
    <div>
        <div className="text-content">
            <h4>{props.role}</h4>
            <h3>{props.name}</h3>
            <BodyOfText content={props.content} />
        </div>
        <CrewImage index={props.index} alt="A crew member" />
    </div>
    )
}
export default Page;